# CareLift: scope, sitemap and design notes

Updated 23 Oct 2026 after the scope reduction. Older drafts (multi-equipment, New Jersey/North Carolina variants) are superseded.

## 1. Scope (client decisions)

- **Product:** power lift chairs only (lift recliners). Private rentals.
- **Not offered:** hospitals/facilities, insurance or Medicare billing, any other equipment.
- **Areas:** New York City and New Jersey, plus some surrounding areas (confirm by phone).
- **Contact:** phone call or contact form (EmailJS). No WhatsApp or SMS.
- **Pricing:** never shown; "call for pricing".
- **Paperwork:** downloadable liability form (PDF) in the footer. PDF to be supplied by the client.
- **Phone:** current number is temporary; a New York number will replace it.
- **Purpose of the site:** supports the Google Business Profile, which brings most of the traffic.

## 2. Sitemap

```
/                                  Home
/lift-chair-rental/                The product: what it is, who it is for, what is included
/how-it-works/                     Three steps, liability form note
/service-areas/                    Hub
  /service-areas/new-york-city/
  /service-areas/new-jersey/
/faq/
/contact/                          Call + EmailJS form
/thank-you/                        After form submit (noindex)
/terms-of-rental/  /privacy-policy/  /photo-credits/
Footer: Download liability form (PDF)
```

Home order: hero (call + message) → the chair → how it works (dark band) → where we deliver (NYC, NJ photos) → FAQ → call/message block.

## 3. Design notes

- Palette: ivory page, ink text, deep teal accent, sand and deep-teal section bands, apricot and copper accents for small details.
- Type: Fraunces (headings, self-hosted subset) + system font stack (body). Base 17px, line-height 1.65.
- Photo-led: every page has its own photos, lazy-loaded with a colour placeholder; hero is the only eager image.
- Decorative shapes (blob, ring, dots, spark, squiggle, arc) live in empty space, never on text.
- Mobile first: sticky bottom bar with Call now / Message us; 48px+ tap targets.
- SEO: unique title and description per page, canonical URLs, sitemap, LocalBusiness + Breadcrumb + FAQ structured data, one product page plus one page per area.

## 4. Open questions for the client

1. Street address and Google Business Profile link (address is hidden until provided).
2. The real New York phone number; the liability form PDF; the final domain.
3. EmailJS values in Netlify (service ID, template ID, public key) and allowed origins.
4. Which chairs and sizes they actually have; photos of their own chairs. The two lift chair photos supplied in chat look like manufacturer or retail images, so they were not published; confirm usage rights or send their own.
5. Rental terms: minimum period, deposit, delivery fee, cancellation, damage. Terms of rental and privacy policy need real text.
6. Delivery claims on the site must be true: delivery, set-up and remote demonstration, pickup at the end, no purchase needed.
7. Exact coverage in NYC and NJ and "surrounding areas"; unique local copy per area page.
8. About/owner story is intentionally omitted from the simple sitemap; add later if wanted. Same for guides and reviews.
9. Analytics or call tracking (not set up).
