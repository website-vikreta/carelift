# CareLift Medical Equipment

Simple, mobile-first Next.js static site (App Router, `output: "export"`) for CareLift: **private lift chair rentals in New York City and New Jersey**.
Scope, sitemap and design notes: [`docs/design-kit-and-sitemap.md`](docs/design-kit-and-sitemap.md).

## Develop

```bash
npm install
cp .env.example .env.local   # then fill in the EmailJS values
npm run dev                  # http://localhost:3000
npm test                     # contact form validation tests
npm run lint                 # type-check
npm run build                # static export to ./out
```

## Environment variables

Set these in Netlify (Site configuration > Environment variables) and redeploy; they are inlined at build time.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ("Contact Us") |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL, sitemap, structured data (defaults to `https://careliftmedicalequipment.com`) |

If the EmailJS values are missing, the form shows "please call us" instead of failing silently.
The EmailJS template must use exactly these variables: `{{title}} {{name}} {{email}} {{contact}} {{zipCode}} {{duration}} {{message}}`,
with Reply To set to `{{email}}`. In EmailJS, add the site domain under allowed origins and consider enabling reCAPTCHA or rate limits.

## Deploy (Netlify, manual)

`netlify.toml` is set up (build `npm run build`, publish `out`, Node 22, security and cache headers).
Run `npm run build` and drag the `out` folder into Netlify, or connect the repo and let Netlify build.

## Things to replace

- **Phone number:** one place, `SITE.phone` / `SITE.phoneHref` in `src/lib/site.ts` (currently the temporary 336 number; swap for the New York number).
- **Liability form:** replace `public/downloads/carelift-liability-form.pdf` with the real PDF (same filename). The current file is a placeholder.
- **Address and Google Business Profile URL:** `SITE.address`, `SITE.gbpUrl` in `src/lib/site.ts`.
- **Photos:** `src/lib/images.ts` (Unsplash stand-ins; swap in photos of your own chairs).
- **Legal pages:** `/terms-of-rental/` and `/privacy-policy/` are drafts pending real text.

Policy: no prices are shown anywhere. Pricing is "call for pricing".
