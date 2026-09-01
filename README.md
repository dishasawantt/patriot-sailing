# Patriot Sailing

A cinematic, editorial redesign of [patriot-sailing.com](https://patriot-sailing.com) — private sailing and hands-on lessons on Lake Erie, out of Buffalo, NY.

Built as a fresh, production-ready site: **Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · next/image · lucide-react**.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerender as static)
npm start        # serve the production build
```

## What's here

| Route | Purpose |
| --- | --- |
| `/` | Home — the full editorial showcase |
| `/cruises` | Private Sailing — the $145 sunset sail for two |
| `/lessons` | Learn to Sail — all four course tiers, curriculum, scheduling |
| `/about` | The Captain (Jim Lewer) & the 2007 Colgate 26 |
| `/gift` | Gift certificates |
| `/faq` | Frequently asked questions |
| `/contact` | Clickable phone/email, location, and a message form |
| `not-found` | A real 404 (the old site served soft-404s) |

## Structure

```
src/
  app/                 routes, layout, metadata, sitemap, robots, icon
  components/
    navigation/        Header, Footer, Logo
    home/              one component per home section (Hero, Manifesto, …)
    shared/            Reveal, Parallax, Button, PageHero, WindRose, WaterLines…
    booking/           ContactForm
  data/                verified business facts, separated from presentation
    site · cruises · lessons · faq · captain · gallery
  lib/                 cn() class helper
public/images/         authentic Patriot Sailing photography
```

## Design system

- **Palette** — sunset over the lake: deep **ocean blue** grounds, warm **sunset coral/amber** accent, warm sailcloth light. Tokens live in `src/app/globals.css`.
- **Two themes** — full **light and dark** modes via a header toggle, persisted to `localStorage` and defaulting to the OS preference, with a no-flash inline script in the layout. Semantic tokens (`canvas` / `panel` / `fg` / `line` / `accent`) flip with the theme; the photographic bands (hero, page heroes, boat scene, gallery, footer) stay intentionally dark in both.
- **Type** — one clean, highly readable grotesque, **Hanken Grotesk**, across the whole site (headings tight-tracked, body relaxed) for a minimal, modern read.
- **Motion** — Apple-style cinematic scrollytelling with **GSAP + ScrollTrigger** riding **Lenis** momentum smooth-scroll, plus per-route fade transitions (`app/template.tsx`): a scroll-scrubbed video hero with Z-axis depth, a sticky **pinned** skyline scene whose 3D text layers in as you scroll, and reveals that rise with a slight tilt out of the Z-plane. Everything respects `prefers-reduced-motion`; append `?still` to any URL for the settled state.
- **Imagery** — a full-bleed **video hero** (`public/videos/hero.mp4`, optimized, muted, looping) plus authentic golden-hour photography — Lake Erie sunsets, the Buffalo skyline from the water, the flag at sundown, the branded boat — placed where each stays sharp, with bespoke SVG motifs (compass rose, chart-style water lines) filling the rest.

## Content

All business facts — pricing, the Colgate 26, the season, Captain Jim Lewer's story, the FAQ, and the police/fire/military discount — are drawn from the existing Patriot Sailing site and kept in `src/data/`. Copy was rewritten to be concise and specific; facts were preserved. The marina street spelling was corrected to **Fuhrmann Blvd**.

## Notes

- Phone and email are real `tel:` / `mailto:` links throughout.
- Per-page `<title>` and meta descriptions, Open Graph tags, a favicon, `sitemap.xml`, and `robots.txt` are all in place.
- The contact form composes a pre-filled email in the visitor's mail app (no backend). Wire it to a form service or API route to collect submissions server-side.
