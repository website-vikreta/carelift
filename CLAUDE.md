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
- **Very small sitemap (mirrors Keystone: Home, About, Rates, Contact):** Home (hero, the chair, how it works, rental options, where we deliver, FAQ, call/message block), Rental options (`/lift-chair-rental/`), About, Contact, plus Terms, Privacy and Thank-you. How it works, areas and FAQ are sections on Home, not pages. Do not add pages or sections without asking.
- **Rental periods (client confirmed, Oct 2026):** weekly (2-week minimum, then week by week), 6-week, long-term (`RENTALS` in `site.ts`). Confirmed true and OK to state: every chair lifts and reclines; same-day or next-day delivery *may* be available; styles/colours vary with availability; pickup is free.
- Keystone is the structural reference only: never copy its text or photos (copyright, and duplicate content hurts SEO).
- **Liability form:** downloadable PDF linked in the footer (and on How it works). File: `public/downloads/carelift-liability-form.pdf` (placeholder until the client supplies the real one).
- **Address:** 363 E Milton Ave, Rahway, NJ 07065 (`SITE.address`; shown in footer and Contact, used in structured data, links to Google Maps).
- The phone number is a temporary placeholder; it lives only in `SITE` in `src/lib/site.ts` and will be replaced with a New York number.
- Do not invent reviews, statistics, credentials or delivery-speed claims. Only state what is true for CareLift.

## Contact form (EmailJS)

- `src/components/ContactForm.tsx` + `src/lib/emailjs.ts` + `src/lib/validation.ts`. Calls EmailJS' REST API from the browser; no extra dependency.
- Env vars (inlined at build, so rebuild after changing): `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` in the committed `.env` (not secrets: EmailJS runs in the browser). `your_...` placeholders count as not configured. Netlify env vars override `.env` only when Netlify runs the build; manual uploads of `out/` use `.env`.
- "Check availability" buttons link to `/contact/`; rental option cards add `?period=<duration>` to preselect the form. Failures log EmailJS' error text to the console.
- Template params are fixed by the client's EmailJS template: `title, name, email, contact, zipCode, duration, message`. Do not rename them.
- US phone only (+1, NANP rules), 5-digit ZIP, valid email, honeypot field. Add a test in `scripts/test-validation.mjs` when changing rules.

## Content and data

- Business data, product copy, areas and FAQs live in `src/lib/site.ts`; pages are data-driven (areas via `AREAS`).
- Placeholders awaiting real data: Google Business Profile URL (`SITE.gbpUrl`), legal pages. Owner (Arvind Dhankhad) photo and story are real (`OWNER` in `site.ts`).
- Chair photos: supplied by the client on 28 Oct 2026 with an explicit instruction to use them (manufacturer/retailer product photos; the client owns the rights question). Stored in `public/images/chairs/` as `<name>-<width>.webp`. Replace with photos of CareLift's own chairs when available. Do not take further photos from keystonemedicalrentals.com or other competitors.
- Keep copy original; do not copy text from reference sites.

## Design and performance rules

- **Minimal, not texty (client request, Oct 2026):** short headings, one-line descriptions, bullet lists over paragraphs, FAQ answers in one or two sentences. Alternating paper / sand sections, deep-navy closing CTA band, ink text, brand blue accent, hairline dividers. No decorative shapes, no card shadows, no uppercase eyebrow labels, no pill chips, no gradient placeholder boxes, no stat or trust badges we cannot back up.
- Photos show lift chairs (with or without someone using them) only: no generic stock of people, cities or unrelated scenes.
- Google Map of the Rahway address (`MapEmbed`, lazy iframe, `SITE.mapEmbed`) on Home (Where we deliver) and Contact.
- **Logo:** traced from the client's PNG into transparent SVGs: `public/logo-horizontal.svg` (header, footer in white via CSS filter), `public/logo.svg` (stacked with tagline), `src/app/icon.svg` (favicon). Brand colours come from the logo: blue `#0a5898`, green `#447d29` (text) / `#599a38`. Keep new colours in that family.
- Design tokens are CSS variables in `src/app/globals.css`. Mobile-first; tap targets at least 48px; body text 17px+; keep contrast AA.
- Fonts: Fraunces (latin, weight axis only) self-hosted via `next/font/local` for headings; system font stack for body. No other web fonts.
- Photos: manifest in `src/lib/images.ts` (average colour shown while loading, optional `position` for crops). `Photo` renders nothing when no image is configured. It always sets width/height and srcset; only the hero image is `priority`, everything else lazy-loads. No photo may appear twice on the same page.
- Keep client JS minimal (mobile menu and contact form only). No animation libraries, no analytics scripts without asking.
- Target Lighthouse mobile 90+ on every page; check after adding sections or scripts.
- Every page ends with a call-to-action block (`CtaBand` or the contact form): Call + Check availability. Nav: Rental options, FAQ (`/#faq`), About, Contact. Home has FAQPage structured data.
