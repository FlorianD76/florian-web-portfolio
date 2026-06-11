# Angry Dollz — E-Commerce Redesign

**Live:** https://florian-dierckx.github.io/angry-dollz/

Exclusive bikinis, lingerie, and dresses in limited-edition fabrics. A Y2K doll aesthetic meets e-commerce conversion optimization.

## Design Direction

- **Y2K Doll Aesthetic** — black + hot pink chrome, glossy, attitude-forward
- **Clash Display typeface** — bold, contemporary display font
- **Limited-edition positioning** — scarcity, custom builds, worldwide shipping
- **Motion & playfulness** — animated category cards, Instagram community integration, pole dance animation

## Key Features

### Hero Section
- "NOT YOUR / GOOD GIRL" (stroke outline + glow fill)
- Ticker bar (scrolling: "Limited-edition fabrics", "Worldwide shipping", "Custom bikinis")
- CTA: "Shop the drop" + "Build your custom"

### Shop Categories
- 4 large cards with gradient overlays (Bikinis, Lingerie, Dresses, Stage & Pole)
- Hover: lift effect + border highlight
- Badge system (Bestseller, New, Limited)

### Product Grid
- 6 product cards with gradient placeholder images
- Flag labels (Limited, New)
- Price + metadata
- Hover animation (lift + glow)

### Pole Dance Animation
- **SVG section** with animated dancer silhouette
- Dancer rotates around vertical pole (720° per cycle)
- Smooth cubic-bezier easing (4s per loop)
- Opacity fade for depth effect

### Community
- 6-column Instagram gallery (gradient placeholders)
- Hover: heart icon appears (♡)
- Community gathering vibe

### Newsletter
- Email capture for discount codes
- "Get the code" CTA

## Files

- `index.html` — semantic structure, SVG for pole animation
- `style.css` — Y2K color palette, gradients, animations
- `script.js` — header scroll, reveal on scroll, mobile menu, burger toggle

## Color Palette

```
--ink: #0a0608 (near-black)
--pink: #FF2E88 (hot pink)
--pink-glow: #ff5ba7
--lilac: #C8A2D8
--cream: #FBEFF5
--chrome: #E8D9E4
```

## Animation Highlights

- **Pole dancer spin** — 4-second loop, rotates 720° (2 full rotations)
- **Reveal on scroll** — sections fade in as they enter viewport
- **Glow effects** — pink halos, card hovers
- **Ticker marquee** — top bar scrolls infinitely

## Responsive

- Mobile-first design
- Tested at 375px, 680px, 920px, 1280px+
- Category grid: 4 columns → 2 → 1 as viewport shrinks
- Product grid: 3 columns → 2 → 1
- Pole animation: responsive canvas

## Use Case

Perfect for:
- E-commerce fashion/lifestyle brands
- Bold, attitude-forward aesthetic
- Demonstrating complex animations (pole dance SVG)
- Playful, contemporary UX
- Community-first positioning

## Notes

This is a **design demo** — product images and prices are placeholders. A real implementation would integrate:
- Real product images (from inventory)
- E-commerce backend (cart, checkout)
- Instagram API for live feed
- Newsletter service (Mailchimp, etc.)
