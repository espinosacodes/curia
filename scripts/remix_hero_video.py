#!/usr/bin/env python3
"""Remix an existing Sora video: keep the v2 scene but lock the camera so only
the water moves. Reads OPENAI_API_KEY from env or .env. Stdlib only.
"""
import json
import os
import sys
import time
import urllib.error
import urllib.request

BASE = "https://api.openai.com/v1/videos"
SOURCE_ID = "video_6a18f1bab0588193a016ad624f5645b808fc997374c9ae9b"  # hero-v2-portico-surreal
OUT_NAME = "hero-v2-static"

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "public")

PROMPT = (
    "Lock the camera to a completely static, fixed tripod shot: zero camera movement, "
    "no pan, no zoom, no dolly, no parallax. Freeze the entire scene perfectly still - "
    "the marble columns, the brushed-gold ring/disc, the blue-and-gold marble egg, the "
    "glossy spheres, the distant mountains, sky and mist do NOT move at all. The ONLY "
    "motion in the whole shot is the shallow foreground water, which ripples very gently "
    "while its mirror-like reflections shimmer softly. Keep the composition, colors and "
    "every object exactly as in the source. Calm, clean, premium, seamless ambient loop."
)


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
    resp = api_request(f"{BASE}/{SOURCE_ID}/remix", key, "POST", {"prompt": PROMPT})
    vid = resp["id"]
    print(f"[submit] remix {SOURCE_ID} -> {vid} ({resp.get('status')})", flush=True)

    deadline = time.time() + 30 * 60
    while time.time() < deadline:
        time.sleep(10)
        info = api_request(f"{BASE}/{vid}", key)
        status = info.get("status")
        print(f"[poll] {status} {info.get('progress','')}", flush=True)
        if status == "completed":
            content = api_request(f"{BASE}/{vid}/content", key, raw=True)
            out = os.path.join(OUT_DIR, f"{OUT_NAME}.mp4")
            with open(out, "wb") as fh:
                fh.write(content)
            print(f"[done] {out} ({len(content)} bytes)", flush=True)
            return
        if status == "failed":
            sys.exit(f"[failed] {info.get('error')}")
    sys.exit("[timeout] remix did not finish")


if __name__ == "__main__":
    main()
