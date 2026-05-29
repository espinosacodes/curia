# Curia hero / CTA background — generation prompts

All hero clips were generated with the **OpenAI Sora 2 Pro** API
(`size=1792x1024`, `seconds=8`) via the scripts in this folder, then upscaled to
4K with ffmpeg. The key is read from `.env` (`OPENAI_API_KEY`).

## Shared style block (prepended to every variant)

> Serene, surreal architectural dreamscape rendered in soft photorealistic 3D.
> Color palette strictly: deep navy (#1b2a4e), muted slate-blue (#5E6470), soft
> off-white (#f0f0f0), with restrained brushed-gold accents and a single deep
> royal-blue glossy sphere. Misty horizon of soft blue-grey mountains beneath a
> pale cloud-streaked sky at blue-golden hour. Glassy, perfectly reflective
> shallow water in the foreground with slow, gentle concentric ripples. Camera:
> an extremely slow, smooth dolly forward with gentle parallax gliding toward the
> open horizon, meditative and weightless. The central horizon stays open and
> uncluttered, leaving soft negative space for overlaid text. Quiet-luxury
> aesthetic, diffused lighting, shallow depth of field, no people, no text, no
> logos, seamless ambient loop.

## Variant prompts (`scripts/generate_hero_video.py`)

- **v1 — portico + water:** a grand classical portico (colonnade of tall fluted
  marble columns in pale, semi-translucent veined stone) spanning the frame and
  mirrored in the calm water; the royal-blue sphere rests near a column base.
- **v2 — portico + surreal objects (chosen):** the colonnade plus interlocking
  brushed-gold rings, the royal-blue sphere, a polished blue-and-gold marble
  egg-shaped boulder, and pale white boulders, arranged like a quiet-luxury
  gallery and reflected in the water.
- **v3 — minimal/abstract:** a sparse colonnade of slender pale columns
  half-dissolved in heavy mist, faint reflections, vast negative space, maximal
  text legibility.

## Final hero — static remix (`scripts/remix_hero_video.py`) → current

Remix of v2 (`video_6a18f1bab0588193a016ad624f5645b808fc997374c9ae9b`) to lock the
camera so **only the water moves**:

> Lock the camera to a completely static, fixed tripod shot: zero camera
> movement, no pan, no zoom, no dolly, no parallax. Freeze the entire scene
> perfectly still — the marble columns, the brushed-gold ring/disc, the
> blue-and-gold marble egg, the glossy spheres, the distant mountains, sky and
> mist do NOT move at all. The ONLY motion in the whole shot is the shallow
> foreground water, which ripples very gently while its mirror-like reflections
> shimmer softly. Keep the composition, colors and every object exactly as in the
> source. Calm, clean, premium, seamless ambient loop.

Output → `public/hero-v2-static.mp4`, upscaled to `public/hero-v2-static-4k.mp4`:

```
ffmpeg -i public/hero-v2-static.mp4 \
  -vf "scale=3840:-2:flags=lanczos,unsharp=5:5:0.8:5:5:0.0" \
  -c:v libx264 -crf 20 -preset slow -pix_fmt yuv420p -an -movflags +faststart \
  public/hero-v2-static-4k.mp4
```

## CTA background

The CTA section ("Give every team AI that knows its role.") uses an animated
**shadergradient** (WebGL) in the brand palette instead of a video — see
`src/components/CTA.jsx`.
