---
name: defi-landing-design
description: >-
  Design system and component spec for building a premium, full-screen
  video-hero marketing/landing page with React + Vite + Tailwind CSS v4 +
  Framer Motion (import { motion } from 'motion/react') + Lucide React. Use this
  whenever building or restyling a landing page in the "RIVR / Curia" aesthetic:
  a full-bleed autoplay video hero inside a large rounded container,
  glassmorphism cards, an inverted-corner "cut-out" docked panel, the Helvetica
  font, a navy/slate color palette, and subtle staggered fade-in + whileInView
  animations. Covers exact fonts, sizes, colors, radii, layout, and animation
  timings so the look can be reproduced or extended consistently.
---

# DeFi / SaaS Video-Hero Landing Design System

A reusable spec for a high-performance landing page. The page content can be
anything (DeFi, AI product, SaaS) — this skill defines the **design language**:
fonts, sizes, colors, layout, and animations. Reproduce these values exactly for
a consistent look.

## When to use
- Building a new marketing/landing page that should feel premium and modern.
- Restyling an existing page to match this aesthetic.
- Adding a section (hero, metrics, features, CTA, footer) that must match the
  existing visual language.

## Tech stack (use exactly these)
- **React** + **Vite**
- **Tailwind CSS v4** via `@import "tailwindcss";` and the `@tailwindcss/vite` plugin
- **Framer Motion**, imported as `import { motion } from 'motion/react'` (the `motion` package, not `framer-motion`)
- **Lucide React** for icons (`lucide-react`)
- Dev server runs on **port 8080**

`package.json` deps: `react`, `react-dom`, `lucide-react`, `motion`, and dev:
`vite`, `@vitejs/plugin-react`, `tailwindcss`, `@tailwindcss/vite`.

`vite.config.js`:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 8080, host: true },
})
```

## Global setup (`src/index.css`)
```css
@import "tailwindcss";

@font-face {
  font-family: "Helvetica Regular";
  src: url("https://db.onlinewebfonts.com/t/a64ff11d2c24584c767f6257e880dc65.eot");
  src: url("https://db.onlinewebfonts.com/t/a64ff11d2c24584c767f6257e880dc65.eot?#iefix") format("embedded-opentype"),
       url("https://db.onlinewebfonts.com/t/a64ff11d2c24584c767f6257e880dc65.woff2") format("woff2"),
       url("https://db.onlinewebfonts.com/t/a64ff11d2c24584c767f6257e880dc65.woff") format("woff"),
       url("https://db.onlinewebfonts.com/t/a64ff11d2c24584c767f6257e880dc65.ttf") format("truetype"),
       url("https://db.onlinewebfonts.com/t/a64ff11d2c24584c767f6257e880dc65.svg#Helvetica Regular") format("svg");
  font-weight: normal; font-style: normal; font-display: swap;
}

@theme { --font-helvetica: "Helvetica Regular", ui-sans-serif, system-ui, sans-serif; }

:root { font-family: var(--font-helvetica); }
body { margin: 0; overflow-x: hidden; background-color: #f0f0f0; }
```

App wrapper: `<main className="min-h-screen bg-[#f0f0f0]">` containing, in order:
`Hero`, `Metrics`, `Features`, `CTA`, `Footer`.

## Color palette (exact)
| Token | Value | Use |
| --- | --- | --- |
| Page background | `#f0f0f0` | body, page, `#f0f0f0` cut-out panel |
| Primary navy | `#1b2a4e` | buttons, headings on light, icon watermarks |
| Navy hover | `#243a6b` | dark button hover |
| Muted slate | `#5E6470` | hero h1, body/paragraph text, doc text |
| Metrics fill | `rgba(30,50,90,0.02)` | metrics inner box bg |
| Metrics border | `rgba(30,50,90,0.05)` | metrics inner box border |
| Metrics divider | `rgba(30,50,90,0.1)` | grid dividers (`divide-*`) |
| Glass surfaces | `white/30`, `white/60` + `backdrop-blur` | floating cards, badges |
| Glass borders | `white/20`, `white/30` | card/badge borders |
| Hero video fallback | gradient `from-[#aeb8c9] to-[#7c8aa3]` | behind hero `<video>` |
| CTA video fallback | gradient `from-[#2b3a5e] to-[#46365e]` | behind CTA `<video>` |
| Hero video overlay | `bg-gradient-to-b from-black/10 via-transparent to-black/20` | legibility |
| CTA video overlay | `bg-black/30` | legibility |

## Typography & sizing
- Font family everywhere: `--font-helvetica` (Helvetica Regular → system fallback).
- **Hero h1**: `text-3xl sm:text-5xl md:text-6xl lg:text-7xl`, `font-semibold tracking-tight leading-[1.05]`, color `#5E6470`. (For a short headline you can scale up to `lg:text-8xl`; drop a step for longer copy so it never forces horizontal overflow.)
- **Section headers** (`h2`): `text-3xl md:text-5xl font-semibold tracking-tight`, color `#1b2a4e`.
- **Card titles** (`h3`): tall card `text-3xl md:text-4xl`; standard `text-2xl md:text-3xl`; small `text-2xl`. `font-semibold tracking-tight`, `#1b2a4e`.
- **Metrics values**: `text-4xl md:text-6xl font-semibold tracking-tight`, `#1b2a4e`.
- **Body / paragraphs**: `text-sm sm:text-base md:text-lg`, `#5E6470` (use `/90` for slightly softer).
- **Small/labels**: `text-xs` / `text-sm`.

## Radii
- Hero & CTA outer `<section>`: `rounded-[1.5rem] md:rounded-[3rem]`, `overflow-hidden`.
- Metrics inner box: `rounded-[1.5rem] md:rounded-[3rem]`.
- Feature cards: `rounded-[1.5rem] md:rounded-[2rem]`.
- Glass floating cards / badges: `rounded-full` (pills) or `rounded-[1.25rem] md:rounded-[1.5rem]`.
- Inverted-corner panel: `rounded-tl-[2.5rem] md:rounded-tl-[3.5rem]`; the fillers are exactly `3.5rem` (`w-14 h-14`).

## Animation system (Framer Motion, `motion/react`)
Reusable variants:
```jsx
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}
```
- **Hero**: wrap the badge/h1/paragraph stack in a `motion.div` with `variants={container} initial="hidden" animate="show"`; each child uses `variants={item}` → staggered fade-in + slight scale.
- **Navbar**: `initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}}` over `0.6s ease-out`.
- **Floating cards** (bottom-left): `initial={{opacity:0,y:24}} animate` with a `delay` (~0.9s).
- **Scroll-in (Metrics, Features)**: `initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3–0.6 }}`. Stagger with a `custom={i}` index and `delay: i * 0.08–0.1`. Direction: upward (`y: 24 → 0`).
- **Premium watermark motion** (decorative Lucide icons behind cards): continuous loops via `motion.div` `animate` + `transition={{ repeat: Infinity, ease: 'easeInOut' }}`. Layers icon: `y: [0,-18,0], rotate: [0,5,0]` over ~9s. Activity icon: `y: [0,12,0], scale: [1,1.05,1]` over ~7s. Keep CSS hover scale on a wrapper element so transforms don't collide: outer `div` has `transition-transform group-hover:scale-110`, inner `motion.div` runs the loop.
- **Hover micro-interactions**: arrows `group-hover/x:rotate-45`; buttons `hover:bg-* transition-colors`; circular buttons `group-hover:scale-110`.
- The standard easing curve for entrances is `[0.22, 1, 0.36, 1]`.

## Background video — muted autoplay (must do)
React's `muted` JSX attribute is unreliable; set the DOM property via a ref or
Safari/iOS/Chrome will block autoplay. Use a shared component:
```jsx
import { useEffect, useRef } from 'react'
export default function BackgroundVideo({ src, className }) {
  const ref = useRef(null)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    v.muted = true; v.defaultMuted = true
    const p = v.play(); if (p?.catch) p.catch(() => {})
  }, [])
  return <video ref={ref} className={className} src={src} autoPlay muted loop playsInline preload="auto" />
}
```
Always render a fallback gradient on the `<section>` behind the video so there is
no flash of empty space while it loads.

## CloudFront video URLs
- Hero: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260428_193507_4286c423-2fd9-4efd-92bd-91a939453fc1.mp4`
- CTA: `https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_104731_bfd355f7-1f84-4f81-ad88-52c2bca70bad.mp4`

## Components

### Hero (`Hero.jsx`)
- Wrapper: `w-full h-screen flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0]`.
- `<section>`: `relative w-full min-w-0 h-full rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center group` + fallback gradient. (`min-w-0` prevents a long h1 from forcing horizontal overflow. Use `max-w-[1536px]` if you want it capped; omit for full-bleed.)
- Background `<BackgroundVideo>` `absolute inset-0 w-full h-full object-cover`, then the legibility overlay, then the `relative z-10` content column.
- Content stack (centered, `text-center px-6`, top margin `mt-12 sm:mt-16 md:mt-28`): Navbar, optional HeroBadge, `h1` (`#5E6470`), paragraph.

### Navbar (`Navbar.jsx`)
- `w-full flex items-center justify-between gap-3 px-4 md:px-10 py-5 md:py-6`.
- Mobile-only text logo (`md:hidden`, `text-2xl font-semibold tracking-tight`, white).
- Desktop centered links (`hidden md:flex ... justify-center gap-8`), white/80 → white on hover; one link may carry a `ChevronRight` that nudges on hover.
- Right CTA pill: dark navy `bg-[#1b2a4e] hover:bg-[#243a6b]`, white text, `pl-3.5 md:pl-4 pr-1.5 py-1.5 rounded-full shrink-0`, with an inner `bg-white/20` circle (`w-7 h-7`) holding an `ArrowUpRight` that rotates 45° on hover.

### HeroBadge (optional pill)
- `inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-md border border-white/20 px-4 py-1.5 shadow-sm`; a Lucide `Sparkles` (`#1b2a4e`) + short label.

### BottomLeftCard (glassmorphism)
- `absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 z-20`.
- `rounded-[1.25rem] md:rounded-[1.5rem] bg-white/30 backdrop-blur-xl border border-white/30 p-3 sm:p-4 md:p-5 shadow-lg`.
- Overlapping avatar circles (`-space-x-2`, `w-7 h-7 rounded-full border-2 border-white/60`), a stat (`text-white font-semibold`) + label (`text-white/80 text-xs`), then a white pill button with an `ArrowUpRight`.

### BottomRightCorner — inverted-corner "cut-out" (signature element)
A `#f0f0f0` panel docked into the bottom-right of the video frame that looks
carved out of the container. **This is the canonical version — do not replace it
with a floating card.**
```jsx
<div className="absolute bottom-0 right-0 z-20">
  <div className="relative bg-[#f0f0f0] rounded-tl-[2.5rem] md:rounded-tl-[3.5rem] p-5 pt-6 pl-12 md:p-6 md:pt-8 md:pl-14">
    {/* Two fillers blend the panel flush into the frame edges */}
    <svg className="absolute right-0 bottom-full w-10 h-10 md:w-14 md:h-14" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="#f0f0f0" />
    </svg>
    <svg className="absolute bottom-0 right-full w-10 h-10 md:w-14 md:h-14" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M56 56V0C56 30.9279 30.9279 56 0 56H56Z" fill="#f0f0f0" />
    </svg>
    <div className="flex items-center gap-3">
      <span className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full border border-[#1b2a4e]/15">
        <ArrowUpRight className="w-5 h-5 text-[#5E6470]" />
      </span>
      <div className="leading-tight">
        <p className="text-[#5E6470] text-sm font-medium">Documentation</p>
        <p className="text-[#5E6470]/60 text-xs">Library</p>
      </div>
    </div>
  </div>
</div>
```
Notes: the panel uses `rounded-tl` for the inner curve; the two SVG fillers
(path `M56 56V0C56 30.9279 30.9279 56 0 56H56Z`, exactly `3.5rem`/`w-14 h-14`)
sit just **above** (`right-0 bottom-full`) and just **left** (`bottom-0 right-full`)
of the panel to flush the curve into the frame's edges. Because the frame is
`overflow-hidden`, the panel's outer corner follows the section's radius. The
video naturally shows through the concave curve — that is intended.

### Metrics (`Metrics.jsx`)
- Container: `w-full max-w-[1536px] mx-auto px-3 md:px-5 py-6 md:py-12`.
- Inner box: `bg-[rgba(30,50,90,0.02)] border border-[rgba(30,50,90,0.05)] rounded-[1.5rem] md:rounded-[3rem] p-8 md:p-16`.
- Grid: `grid grid-cols-2 lg:grid-cols-4` with `divide-x divide-y lg:divide-y-0 divide-[rgba(30,50,90,0.1)]`; each cell `flex flex-col gap-2 px-6 py-8 md:px-10`.
- Value `text-4xl md:text-6xl` `#1b2a4e`; label `text-sm md:text-base` `#5E6470`.
- Staggered upward `whileInView` fade-ins (`custom={i}`, `delay: i*0.1`).
- Example data: 4 stats (value + label).

### Features (`Features.jsx`) — white cards on `#f0f0f0`, no background video
- Section: `w-full max-w-[1536px] mx-auto px-3 md:px-5 py-6 md:py-12`.
- Header row: `h2` left, plus a floating outline pill button right
  (`rounded-full border border-[#1b2a4e]/20 px-5 py-2.5 hover:bg-[#1b2a4e] hover:text-white`) with an `ArrowUpRight` rotating on hover.
- Grid: `grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-5`.
- Card base: `group relative bg-white rounded-[1.5rem] md:rounded-[2rem] overflow-hidden transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]`.
- **Card 1 (tall left)**: `md:row-span-2 md:min-h-[28rem]`, `flex flex-col justify-between gap-10`. Title top, description bottom. Large Lucide `Layers` watermark anchored bottom-right, `opacity-[0.06]` (`text-[#1b2a4e]`), `group-hover:scale-110`, with the continuous float/rotate motion. Keep base `min-h` to `md:` so mobile doesn't get a giant empty gap.
- **Card 2 (wide top right)**: `md:col-span-2`. Title `Real-time`-style. Lucide `Activity` watermark anchored bottom-right, `opacity-[0.06]`, drift/scale motion.
- **Card 3**: a Lucide `ShieldCheck`, title, body, and a `View …` rounded outline button at the bottom.
- **Card 4**: title + short line + a gray circular button (`bg-[#f0f0f0]`) with an `ArrowUpRight` that scales on hover.
- Watermark opacity is `0.06` (was `0.02` originally — bump for contrast).

### CTA (`CTA.jsx`)
- Same outer layout as Hero: `w-full flex items-center justify-center p-3 md:p-5 bg-[#f0f0f0]`, then a `relative w-full min-h-[34rem] md:min-h-[40rem] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex items-center justify-center` section with its own `<BackgroundVideo>` + fallback gradient + `bg-black/30` overlay.
- Centered white content (`whileInView` fade-up): big headline (`text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight`), then two flex-row buttons:
  - Primary: solid white pill, `#1b2a4e` text, with an inner dark circle holding a rotating `ArrowUpRight`.
  - Secondary: `bg-white/10 backdrop-blur-md border border-white/20 text-white` with a Lucide `BookOpen` icon.

### Footer (`Footer.jsx`)
- `w-full max-w-[1536px] mx-auto px-6 md:px-10 py-12 md:py-16 border-t border-[rgba(30,50,90,0.1)]`.
- Two-column top: left = logo text (`#1b2a4e text-2xl font-semibold`) + short description (`#5E6470 text-sm`); right = 3 columns of small muted links (`text-[#5E6470]/70 hover:text-[#1b2a4e] transition-colors`).
- Bottom strip: `border-t`, small `#5E6470/60` copyright + a couple of muted legal links.

## Build checklist
1. Scaffold Vite + React; install deps; set `vite.config.js` port to 8080.
2. Write `index.css` (Tailwind import, font-face, theme var, root/body).
3. `App.jsx`: `<main className="min-h-screen bg-[#f0f0f0]">` with the 5 sections.
4. Build components with the exact classes/colors/animations above.
5. Use `BackgroundVideo` for every hero/CTA video (ref-based muting).
6. Verify: no horizontal overflow at 390 / 768 / 1440px; videos autoplay muted;
   `whileInView` sections animate on scroll. Run on `http://localhost:8080`.
