# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

CareLift Medical Equipment: simple, mobile-first, SEO-focused static site (Next.js App Router, `output: "export"`),
deployed manually to Netlify. **Private lift chair rentals only, in New York City and New Jersey (and some surrounding areas).**
Modelled on keystonemedicalrentals.com (a lean lift-chair rental site) in scope and structure. Scope, sitemap and open questions: `docs/design-kit-and-sitemap.md`.

## Commands

- `npm run dev`: local dev server
- `npm run lint`: type-check (`tsc --noEmit`)
- `npm test`: contact form validation tests
- `npm run build`: static export to `out/`; run lint, test and build before committing

## Scope rules (client decisions, Oct 2026)

- **One product: power lift chairs.** No other equipment (no beds, wheelchairs, walkers, scooters, oxygen, etc.).
- **Private rentals only.** No hospitals, facilities or B2B. **No insurance or Medicare** (the FAQ says so).
- **Areas:** New York City and New Jersey (plus "some surrounding areas, call to confirm"). Not North Carolina.
- **Contact is call or the contact form only. No WhatsApp, no SMS.**
- **Never show prices.** "Call for pricing".
- **Very small sitemap (Keystone-style):** Home (hero, the chair, how it works, where we deliver, FAQ, call/message block), Lift chair rental, Contact, plus Terms, Privacy, Photo credits and Thank-you. How it works, areas and FAQ are sections on Home, not pages. Do not add pages or sections without asking.
- **Liability form:** downloadable PDF linked in the footer (and on How it works). File: `public/downloads/carelift-liability-form.pdf` (placeholder until the client supplies the real one).
- **Address:** 363 E Milton Ave, Rahway, NJ 07065 (`SITE.address`; shown in footer and Contact, used in structured data, links to Google Maps).
- The phone number is a temporary placeholder; it lives only in `SITE` in `src/lib/site.ts` and will be replaced with a New York number.
- Do not invent reviews, statistics, credentials or delivery-speed claims. Only state what is true for CareLift.

## Contact form (EmailJS)

- `src/components/ContactForm.tsx` + `src/lib/emailjs.ts` + `src/lib/validation.ts`. Calls EmailJS' REST API from the browser; no extra dependency.
- Env vars (inlined at build): `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`. See `.env.example`.
- Template params are fixed by the client's EmailJS template: `title, name, email, contact, zipCode, duration, message`. Do not rename them.
- US phone only (+1, NANP rules), 5-digit ZIP, valid email, honeypot field. Add a test in `scripts/test-validation.mjs` when changing rules.

## Content and data

- Business data, product copy, areas and FAQs live in `src/lib/site.ts`; pages are data-driven (areas via `AREAS`).
- Placeholders awaiting real data: Google Business Profile URL (`SITE.gbpUrl`), photos of real chairs (`src/lib/images.ts`), legal pages, per-area local copy.
- Keep copy original; do not copy text from reference sites. Do not publish the client's reference photos of lift chairs (rights unknown) unless they confirm usage rights.

## Design and performance rules

- Photo-led, calm and premium, alternating paper / sand / deep-navy sections for contrast: light page, ink text, brand blue accent with green details, hairline dividers. No card shadows, no uppercase eyebrow labels, no pill chips, no gradient placeholder boxes, no stat or trust badges we cannot back up.
- Decorative shapes (`src/components/Deco.tsx`: blob, ring, dots, spark, squiggle, arc) sit in empty space around photos and section edges, positioned with `.o-*` classes. Never over text, never more than ~4 per section.
- **Logo:** traced from the client's PNG into transparent SVGs: `public/logo-horizontal.svg` (header, footer in white via CSS filter), `public/logo.svg` (stacked with tagline), `src/app/icon.svg` (favicon). Brand colours come from the logo: blue `#0a5898`, green `#447d29` (text) / `#599a38`. Keep new colours in that family.
- Design tokens are CSS variables in `src/app/globals.css`. Mobile-first; tap targets at least 48px; body text 17px+; keep contrast AA.
- Fonts: Fraunces (latin, weight axis only) self-hosted via `next/font/local` for headings; system font stack for body. No other web fonts.
- Photos: manifest in `src/lib/images.ts` (with average colour shown while loading). `Photo` renders nothing when no image is configured. It always sets width/height and srcset; only the hero image is `priority`, everything else lazy-loads. No photo may appear twice on the same page (check: no duplicate unsplash ids per built HTML page). Every photo used must be credited on /photo-credits/ (derived from the manifest) and registered via the Unsplash download endpoint.
- Keep client JS minimal (mobile menu and contact form only). No animation libraries, no analytics scripts without asking.
- Target Lighthouse mobile 90+ on every page; check after adding sections or scripts.
- Every page ends with a call-to-action block (`CtaBand` or the contact form): Call + Send a message. Home links to the lift chair page; nav anchors point to Home sections (`#how-it-works`, `#faq`).
