#!/usr/bin/env python3
"""Generate Curia "portico" hero videos with the OpenAI Sora API.

Reads OPENAI_API_KEY from the environment or the repo .env, submits one job per
prompt variant, polls until each finishes, and downloads the mp4 into public/.
Stdlib only (urllib) so there is nothing to install.
"""
import json
import os
import sys
import time
import urllib.error
import urllib.request

API = "https://api.openai.com/v1/videos"
MODEL = "sora-2-pro"
SIZE = "1792x1024"
SECONDS = "8"

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "public")

SHARED = (
    "Serene, surreal architectural dreamscape rendered in soft photorealistic 3D. "
    "Color palette strictly: deep navy (#1b2a4e), muted slate-blue (#5E6470), soft "
    "off-white (#f0f0f0), with restrained brushed-gold accents and a single deep "
    "royal-blue glossy sphere. Misty horizon of soft blue-grey mountains beneath a "
    "pale cloud-streaked sky at blue-golden hour. Glassy, perfectly reflective shallow "
    "water in the foreground with slow, gentle concentric ripples. Camera: an extremely "
    "slow, smooth dolly forward with gentle parallax gliding toward the open horizon, "
    "meditative and weightless. The central horizon stays open and uncluttered, leaving "
    "soft negative space for overlaid text. Quiet-luxury aesthetic, diffused lighting, "
    "shallow depth of field, no people, no text, no logos, seamless ambient loop."
)

VARIANTS = [
    (
        "hero-v1-portico-water",
        "A grand classical portico - a colonnade of tall fluted marble columns in pale, "
        "semi-translucent veined stone - spans the frame and is mirrored in the calm water "
        "across the foreground. The portico opens onto the misty mountain horizon. The deep "
        "royal-blue glossy sphere rests near a column base; brushed-gold accents catch the "
        "light. Low mist drifts between the columns; soft shafts of light and faint floating "
        "dust particles. Mood: calm, premium, intelligent, quietly powerful - a sanctuary of "
        "order and clarity, a virtual office. " + SHARED
    ),
    (
        "hero-v2-portico-surreal",
        "A grand classical portico of tall fluted marble columns spans the frame, mirrored in "
        "the calm reflective water. Arranged around the colonnade like a quiet-luxury gallery "
        "and reflected in the water: interlocking brushed-gold rings, the deep royal-blue glossy "
        "sphere, a large polished blue-and-gold marble egg-shaped boulder, and pale smooth white "
        "boulders. Low mist drifts between the columns; soft light shafts and floating dust. "
        "Dreamlike, surreal, premium. " + SHARED
    ),
    (
        "hero-v3-portico-minimal",
        "A sparse, abstract colonnade of slender pale columns half-dissolved in heavy drifting "
        "mist and fog, reflected only faintly in a glassy sheet of still water. Mostly soft "
        "slate-blue and off-white tones with faint navy depth and a whisper of gold. Vast "
        "negative space; minimal detail; extremely subtle, barely-there motion - faint ripples "
        "and slowly shifting light. Ethereal, meditative, maximal legibility for overlaid text. "
        + SHARED
    ),
]


def load_key():
    key = os.environ.get("OPENAI_API_KEY")
    if key:
        return key.strip()
    env_path = os.path.join(ROOT, ".env")
    if os.path.exists(env_path):
        with open(env_path) as fh:
            for line in fh:
                line = line.strip()
                if line.startswith("OPENAI_API_KEY="):
                    return line.split("=", 1)[1].strip().strip('"').strip("'")
    sys.exit("OPENAI_API_KEY not found in environment or .env")


def api_request(url, key, method="GET", data=None, raw=False):
    headers = {"Authorization": f"Bearer {key}"}
    body = None
    if data is not None:
        body = json.dumps(data).encode()
        headers["Content-Type"] = "application/json"
    req = urllib.request.Request(url, data=body, headers=headers, method=method)
    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            payload = resp.read()
            return payload if raw else json.loads(payload)
    except urllib.error.HTTPError as e:
        detail = e.read().decode(errors="replace")
        sys.exit(f"HTTP {e.code} on {method} {url}\n{detail}")


def main():
    key = load_key()
    os.makedirs(OUT_DIR, exist_ok=True)
    jobs = []
    for name, prompt in VARIANTS:
        resp = api_request(
            API, key, "POST",
            {"model": MODEL, "prompt": prompt, "size": SIZE, "seconds": SECONDS},
        )
        jobs.append({"name": name, "id": resp["id"], "status": resp.get("status")})
        print(f"[submit] {name} -> {resp['id']} ({resp.get('status')})", flush=True)

    pending = {j["id"]: j for j in jobs}
    deadline = time.time() + 30 * 60
    while pending and time.time() < deadline:
        time.sleep(10)
        for vid in list(pending):
            j = pending[vid]
            info = api_request(f"{API}/{vid}", key)
            status = info.get("status")
            progress = info.get("progress", "")
            print(f"[poll] {j['name']} {status} {progress}", flush=True)
            if status == "completed":
                content = api_request(f"{API}/{vid}/content", key, raw=True)
                out = os.path.join(OUT_DIR, f"{j['name']}.mp4")
                with open(out, "wb") as fh:
                    fh.write(content)
                print(f"[done] {j['name']} -> {out} ({len(content)} bytes)", flush=True)
                del pending[vid]
            elif status == "failed":
                err = info.get("error")
                print(f"[failed] {j['name']}: {err}", flush=True)
                del pending[vid]

    if pending:
        print(f"[timeout] still pending: {[p['name'] for p in pending.values()]}", flush=True)
        sys.exit(1)
    print("[all-done]", flush=True)


if __name__ == "__main__":
    main()
