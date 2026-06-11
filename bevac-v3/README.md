# BEVAC Engineering — V3 (Modern + Animations)

**Live:** https://florian-dierckx.github.io/bevac-v3/

Same design direction as V2, enhanced with modern motion and progressive enhancement.

## What's New vs V2

- **Animated counters** — 60+, 100% numbers count up on scroll
- **Hero title reveal** — "La sécurité..." word-by-word rise with staggered timing
- **Tile spotlight** — service cards have hidden glow that follows your cursor (3D tilt on hover)
- **Button shine effect** — CTA button has sweeping reflet on hover
- **Grid drift** — background grid slowly animates (40s loop)
- **Reveal on scroll** — all sections fade in + slide up as they enter viewport

## Animation Details

All animations respect `prefers-reduced-motion: reduce` for accessibility:
- Animations disabled if user has set system preference for reduced motion
- Content remains fully accessible and visible without JS
- Animations use cubic-bezier easing for smooth, professional feel

## Files

- `index.html` — same structure as V2, with data attributes for animations
- `style.css` — includes all keyframes (wordrise, poleSpinUp, pulse, drift, etc.)
- `script.js` — IntersectionObserver for reveals, countdown animations, header scroll state

## Performance

- Lightweight animations (CSS-based, not JS-intensive)
- ~31KB HTML (slightly larger due to animation keywords)
- Loads instantly on modern browsers
- Mobile-optimized (animations scale gracefully)

## Use Case

This version works for:
- Modern tech companies
- Agencies wanting to showcase animation skills
- Clients who value contemporary UX
- Demonstrating progressive enhancement expertise

## Notes

The animations are **decorative enhancements**, not core to the experience. They add professionalism without distraction.
