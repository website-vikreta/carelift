# CareLift Medical Equipment

Static, mobile-first Next.js site (App Router, `output: "export"`) for CareLift Medical Equipment, North Carolina.
Strategy, design kit and sitemap: [`docs/design-kit-and-sitemap.md`](docs/design-kit-and-sitemap.md).

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Deploy (Netlify, manual)

`netlify.toml` is configured (build `npm run build`, publish `out`, Node 22, security and cache headers).

1. Run `npm run build`, then drag the `out` folder into Netlify, or connect the repo and let Netlify build.
2. Set `NEXT_PUBLIC_SITE_URL` (defaults to `https://careliftmedicalequipment.com`; change when the domain changes) in Netlify environment variables.
   It drives canonical URLs, `sitemap.xml`, `robots.txt` and JSON-LD.
3. Quote form uses **Netlify Forms** (`public/__forms.html` registers it). After the first deploy, enable
   email notifications under Forms in the Netlify dashboard. Note: a drag-and-drop deploy of `out` works with Forms too.

## Content to fill in

All business data lives in `src/lib/site.ts`: address, hours, Google Business Profile URL, categories/items, counties, FAQs.
Search for `TODO` for pending copy (about, legal, county-specific text).
Images are placeholders (`src/components/Placeholder.tsx`); swap in stock/own photos from `public/images/`.

Policy: no prices are shown anywhere on the site. Pricing is "call for pricing".
