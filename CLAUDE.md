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
