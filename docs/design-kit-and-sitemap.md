# CareLift — Design Kit & Sitemap Proposal

Medical equipment rental, New Jersey. Households and hospitals/facilities. Audience 20–60.

> **Research caveat.** keystonemedicalrentals.com and mediplushomehealth.com could not be fetched from the
> build environment (network blocked), so nothing below is claimed about them. Review both by hand against
> the "Reference checklist" at the end. The rest is based on standard local-SEO practice and the
> structure typical of rental sites.

## 1. Strategy

**Role of the site:** Google Business Profile (GBP) wins the click; the website wins the *decision*. A
visitor arriving from GBP has about five seconds to confirm three things: *they are local, they have my
item, I can call right now.*

| Principle | What it means in the build |
|---|---|
| GBP-first | Home page mirrors the GBP: same name, address, phone (NAP), hours, categories, service area, and review count. Embedded map + reviews on Home, Contact, and every location page. |
| Call-first conversion | Sticky mobile bar: **Call** · **Text** · **Get a quote**. No cart or checkout. Rentals are quote-led. |
| Images sell, text ranks | Large product photography carries the persuasion. Each page also has 300–600 words of real, specific copy for search. |
| Mobile-first | Design at 360px, then enhance. Thumb-reachable actions, 48px tap targets. |
| Premium, calm, not clinical | Warm neutrals + deep teal, serif headlines, generous whitespace, restrained motion. |

## 2. Design Kit

### 2.1 Colour

| Token | Hex | Use |
|---|---|---|
| `--ink` | `#14232B` | Body text, headings |
| `--teal-700` | `#0F5C5C` | Primary brand, primary buttons (white text 7.9:1) |
| `--teal-100` | `#DCEBE8` | Tints, badges, hover surfaces |
| `--ivory` | `#FAF7F2` | Page background |
| `--sand` | `#EFE8DC` | Alternate section background, cards |
| `--sage` | `#A9C1B0` | Dividers, icons, subtle accents |
| `--copper-600` | `#A35A2E` | Secondary accent / highlights (white text 5.1:1) |
| `--line` | `#D9D2C5` | Borders |
| `--success` / `--error` | `#2E7D5B` / `#B3372F` | Form states only |

Dark mode is out of scope for v1. Every text/background pair must pass WCAG AA (4.5:1); the older end of
the audience makes this non-negotiable.

### 2.2 Typography

- **Headings:** Fraunces (variable serif, 600). Gives the premium, human tone.
- **Body / UI:** Inter (400/500/600).
- Self-host, `font-display: swap`, subset to Latin.
- Mobile scale (base **18px**, line-height 1.65, measure 60–70ch):
  H1 34/1.15 · H2 26/1.25 · H3 21/1.3 · body 18 · small 15 (never below 15).
- Desktop scale: H1 52 · H2 36 · H3 24 · body 18.

### 2.3 Layout & spacing

- 4px base unit: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 72 · 96.
- Mobile gutter 20px. Max content width 1200px; reading width 68ch.
- Section rhythm: 56px vertical on mobile, 96px on desktop; alternate `ivory` / `sand`.
- Radius: 14px cards, 999px pills/buttons. Shadows: one soft elevation only (`0 8px 30px rgb(20 35 43 / .08)`).

### 2.4 Imagery (primary selling tool)

- Product shots on warm neutral/ivory seamless backdrop, consistent angle and crop (4:5 on cards, 3:2 hero).
- One **in-use lifestyle** image per category (equipment in a real home, not a stock hospital).
- Delivered as AVIF/WebP with explicit width/height, `srcset`, lazy-loaded below the fold; hero image
  preloaded. Descriptive filenames and alt text with product + use ("electric hospital bed, home rental NJ").
- Real photos of your own inventory and delivery van outrank stock for trust and for Google image/GBP consistency.

### 2.5 Components

1. **Sticky action bar** (mobile): Call / Text / Quote. Desktop: phone + Quote in header.
2. **Product card:** image, name, 1-line use case, "from $X/week" (or "Call for rate"), **Request quote** button.
3. **Category tile:** large image, label, item count.
4. **Trust strip:** ★ GBP rating + review count, "Same-day delivery in [counties]", "Insurance-friendly paperwork", "Sanitised after every rental". Only claims that are true.
5. **How it works:** 3 steps (Choose → We deliver & set up → We pick up).
6. **Quote form:** name, phone, ZIP, item, rental length, hospital/home toggle. 5 fields max; phone-number-first.
7. **FAQ accordion** (with FAQPage schema where content is genuinely Q&A).
8. **Review cards** pulled from GBP (manually curated to start).
9. **Location block:** map, address, hours, service-area list.
10. **Breadcrumbs** on all inner pages.
11. **Facility/B2B banner** linking to the hospitals page.

### 2.6 Buttons & motion

- Primary: teal fill, white text, 52px high. Secondary: outlined teal. Call button always visible and *never* only an icon.
- Motion: 150–250ms fades/translate on hover and accordion only. Respect `prefers-reduced-motion`.

### 2.7 Voice

Plain, reassuring, specific. No jargon, no fear-selling. Lead with the outcome ("Home from hospital
tomorrow? A bed can be in the room tonight.") then facts: sizes, weight capacity, delivery area, rental
terms.

### 2.8 Performance & accessibility targets

LCP < 2.0s on 4G mobile, CLS < 0.05, total JS < 100KB on content pages (static site, no framework runtime
where avoidable). WCAG 2.2 AA, visible focus states, form labels, `lang`, skip link.

## 3. Sitemap

URL pattern is flat, keyword-descriptive, lowercase. Every page has one H1, a unique title and meta
description, breadcrumbs, and internal links to its siblings and parent.

```
/                                         Home
/rentals/                                 Rentals hub (category tiles)
  /rentals/hospital-beds/
  /rentals/wheelchairs/
  /rentals/mobility-aids/                 walkers, rollators, canes, knee scooters, transport chairs
  /rentals/lift-chairs-and-patient-lifts/
  /rentals/bathroom-safety/               commodes, shower chairs, raised seats
  /rentals/post-surgery-recovery/
  /rentals/bariatric/
  /rentals/{category}/{product}/          individual product pages (spec, photos, FAQ, quote CTA)
/who-we-serve/
  /who-we-serve/families-and-home-care/
  /who-we-serve/post-surgery-recovery/
  /who-we-serve/hospice-and-palliative/
  /who-we-serve/hospitals-and-facilities/ B2B: volume, contracts, invoicing
/service-areas/                           NJ coverage hub + map
  /service-areas/{county}-county-nj/      one per county actually served
    /service-areas/{town}-nj/             only for towns with real local detail (optional, phase 2)
/how-renting-works/                       steps, delivery, pickup, deposit, sanitation
/pricing-and-insurance/                   rate guidance, Medicare/insurance honest explainer
/faq/
/guides/                                  blog: "Hospital bed vs. adjustable bed", "What size wheelchair…" etc.
  /guides/{article}/
/reviews/                                 curated GBP reviews + link to leave one
/about/
/contact/                                 NAP, map, hours, form, click-to-call
/get-a-quote/                             primary conversion page
/privacy-policy/  /terms-of-rental/  /accessibility-statement/
/sitemap.xml  /robots.txt  /llms.txt (optional)
```

**Primary nav (mobile menu, ≤6 items):** Rentals · Who we serve · Service areas · How it works · Reviews · Contact,
with a persistent **Call** button.
**Footer:** NAP, hours, category links, county links, legal, GBP link.

### Home page section order

1. Hero: one-line promise + hero image + Call / Get quote.
2. Trust strip (rating, delivery area, hours).
3. Category tiles (image-led).
4. How renting works (3 steps).
5. Featured products (6 cards).
6. Who we serve (home vs. facilities).
7. Reviews.
8. Service-area list + map.
9. Short FAQ (4–5 Qs).
10. Final CTA band.

### Page template (category / product)

H1 with keyword + "Rental in New Jersey" → hero image → 2–3 sentence summary + CTA → product grid or spec table →
who it's for / how to choose (200–300 words) → delivery & rental terms → FAQ → related categories → nearby counties → CTA.

## 4. SEO & GBP alignment

- **Schema:** `LocalBusiness` (sub-type `MedicalBusiness` / `HealthAndBeautyBusiness` as appropriate) on Home and Contact with identical NAP, hours, `areaServed`, `sameAs` → GBP URL; `Product`/`Offer` on product pages; `FAQPage`; `BreadcrumbList`.
- **NAP consistency** across site, GBP, and citations is the single biggest trust signal; use one source of truth in code.
- **Location pages:** one per county actually served, each with unique content (delivery times, local hospitals/rehab centres you really serve, local FAQs). Do not template-clone; duplicated copy dilutes relevance.
- **GBP loop:** GBP "Website" link → Home; products/services in GBP link to matching category pages; add UTM tags to measure GBP clicks; mirror GBP categories in page titles.
- **Core keywords per category:** "{item} rental {county/town} NJ", "rent a {item} near me", "short-term {item} rental".
- **Technical:** static HTML, canonical URLs, XML sitemap, clean 301 map, image sitemap, `hreflang` not needed.
- **Compliance flags:** confirm what you can state about Medicare/insurance and any item (e.g. oxygen) needing a prescription or state licensing before publishing copy.

## 5. Suggested build approach

Static, content-driven site (Astro or similar) deployed on Vercel, content in Markdown/JSON so adding a product
or county is one file. Quote form posts to email/CRM with spam protection. Phase 1: Home, Rentals hub +
top 4 categories, How it works, Service areas hub + served counties, Contact, Get a quote, legal. Phase 2: products,
guides, town pages, B2B page.

## 6. Reference checklist (to do by hand on the two sites)

For each of keystonemedicalrentals.com and mediplushomehealth.com note: nav items, whether prices are shown,
quote vs. cart flow, how location is signalled, number/quality of location pages, trust signals above the fold,
word count on category pages, and what feels dated. Then we adjust this plan.

## 7. Open questions

1. Exact business name, address, phone, hours; is it storefront or service-area-only on GBP?
2. Which NJ counties/towns do you really deliver to?
3. Inventory list and which items you rent (oxygen? bariatric? facility contracts?).
4. Pricing: publish "from" rates or "call for pricing"?
5. Do you have your own product/delivery photography?
6. Logo/brand colours already in use?
7. Preferred stack, or happy with static + Vercel?
