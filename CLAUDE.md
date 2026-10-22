# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

CareLift Medical Equipment: mobile-first, SEO-focused static site (Next.js App Router, `output: "export"`),
deployed manually to Netlify. Local business (Guilford and Forsyth County, NC); Google Business Profile drives
traffic and the site supports it. Strategy and design kit: `docs/design-kit-and-sitemap.md`.

## Commands

- `npm run dev`: local dev server
- `npm run lint`: type-check (`tsc --noEmit`)
- `npm run build`: static export to `out/`; run lint and build before committing

## Conventions

- All business data, categories, counties, audiences, FAQs and guides live in `src/lib/site.ts`. Pages are data-driven; add a county or category there rather than creating files.
- **Never show prices.** Rentals are "call for pricing". No cart or checkout; primary conversion is **Call + WhatsApp** (`ContactButtons`, `waLink()` in `src/lib/site.ts`); the quote form (Netlify Forms, stub in `public/__forms.html`) is lowest priority, shown only as a text link.
- Do not invent reviews, statistics, credentials or delivery-speed claims. Only state what is true for CareLift.
- Placeholders awaiting real data: street address (`addressConfirmed: false` keeps it out of JSON-LD), Google Business Profile URL (`gbpUrl`), images (add Unsplash photos to `src/lib/images.ts`; missing ones fall back to `Placeholder`), legal pages, About copy, per-county local copy.
- Design tokens are CSS variables in `src/app/globals.css`. Mobile-first; tap targets at least 48px; body text 18px; keep contrast AA.
- Keep copy original; do not copy text from reference sites.

## Design and performance rules

- Photo-led, calm and premium, alternating paper / sand / deep-teal sections for contrast: ivory page, ink text, one teal accent, hairline dividers. Real photos do the selling (category tiles, audience tiles, hero, delivery, galleries). No card shadows, no uppercase eyebrow labels, no pill chips, no gradient placeholder boxes, no stat or trust badges we cannot back up.
- Decorative shapes (`src/components/Deco.tsx`: blob, ring, dots, spark, squiggle, arc) sit in empty space around photos and section edges, positioned with `.o-*` classes. Never over text, never more than ~4 per section.
- Fonts: Fraunces (latin, weight axis only) self-hosted via `next/font/local` for headings; system font stack for body. No other web fonts.
- Photos: manifest in `src/lib/images.ts` (with average colour shown while loading). `Photo` renders nothing when no image is configured. It always sets width/height and srcset; only the hero image is `priority`, everything else lazy-loads. No photo may appear twice on the same page (check: no duplicate unsplash ids per built HTML page). Every photo used must be credited on /photo-credits/ (derived from the manifest) and registered via the Unsplash download endpoint.
- Keep client JS minimal (only the mobile menu). No animation libraries, no analytics scripts without asking.
- Target Lighthouse mobile 90+ on every page; check after adding sections or scripts.
- Interlinking: every category, audience and county page links onward to related categories, audiences and both cities, and ends with `CtaBand`.
