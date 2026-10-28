# CareLift Medical Equipment

Simple, mobile-first Next.js static site (App Router, `output: "export"`) for CareLift: **private lift chair rentals in New York City and New Jersey** (based in Rahway, NJ).
Scope, sitemap and design notes: [`docs/design-kit-and-sitemap.md`](docs/design-kit-and-sitemap.md).

## Develop

```bash
npm install
# fill in the EmailJS values in .env first
npm run dev                  # http://localhost:3000
npm test                     # contact form validation tests
npm run lint                 # type-check
npm run build                # static export to ./out
```

## Environment variables

They live in the committed **`.env`** file (replace the `your_...` placeholders). They are inlined at build time, so
**rebuild after changing them**. They are not secrets: EmailJS runs in the visitor's browser, so these IDs are public by design.

Important for manual deploys: if you build on your computer and drag `out/` into Netlify, Netlify's own environment variables
are **never used**; only `.env` is. Netlify's variables only apply when Netlify itself runs the build (connected repo).

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ("Contact Us") |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL, sitemap, structured data (defaults to `https://careliftmedicalequipment.com`) |

If the EmailJS values are missing or still placeholders, the form shows "please call us" instead of failing silently.
If EmailJS rejects a send (wrong ID, origin not allowed, quota), the reason is logged in the browser console.
The EmailJS template must use exactly these variables: `{{title}} {{name}} {{email}} {{contact}} {{zipCode}} {{duration}} {{message}}`,
with Reply To set to `{{email}}`. In EmailJS, add the site domain under allowed origins and consider enabling reCAPTCHA or rate limits.

## Deploy (Netlify, manual)

`netlify.toml` is set up (build `npm run build`, publish `out`, Node 22, security and cache headers).
Run `npm run build` and drag the `out` folder into Netlify, or connect the repo and let Netlify build.

## Things to replace

- **Phone number:** one place, `SITE.phone` / `SITE.phoneHref` in `src/lib/site.ts` (currently the temporary 336 number; swap for the New York number).
- **Liability form:** replace `public/downloads/carelift-liability-form.pdf` with the real PDF (same filename). The current file is a placeholder.
- **Google Business Profile URL:** `SITE.gbpUrl` in `src/lib/site.ts`. The address (363 E Milton Ave, Rahway, NJ 07065) is `SITE.address`.
- **Logo files:** `public/logo-horizontal.svg`, `public/logo.svg`, `src/app/icon.svg` (favicon). Replace with the vector master if the designer has one.
- **Photos:** `public/images/chairs/` + `src/lib/images.ts` (client-supplied lift chair photos; swap in photos of your own chairs when available).
- **Legal pages:** `/terms-of-rental/` and `/privacy-policy/` are drafts pending real text.

Policy: no prices are shown anywhere. Pricing is "call for pricing".
