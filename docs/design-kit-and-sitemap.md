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

## 2. Sitemap (mirrors Keystone: Home, About, Rates, Contact)

```
/                       Home: hero, the chair, how it works (#how-it-works), rental options, where we deliver, FAQ (#faq), call/message block
/lift-chair-rental/     Rental options: weekly (2-week min), 6-week, long-term; what is included; often rented after
/about/                 Short company intro + Meet the owner (Arvind Dhankhad)
/contact/               Call, address, hours, EmailJS form
/thank-you/             After form submit (noindex)
/terms-of-rental/  /privacy-policy/  /photo-credits/
Footer: Download liability form (PDF), address, phone, hours
```

## 3. Design notes

- Brand: taken from the logo (tree with figure, blue "Care", green "Lift"). Blue `#0a5898`, green `#447d29` for text / `#599a38` for graphics, deep navy bands `#0b2f52`, soft green and sand tints.
- Logo: traced to transparent SVG (horizontal lockup in the header, white version in the footer, tree icon as favicon).
- Type: Fraunces (headings, self-hosted subset) + system font stack (body). Base 17px.
- Minimal and not texty: chair photos only (Unsplash recliner stand-ins until real photos arrive), no decorative shapes. Hero is the only eager image.
- Mobile first: sticky bottom bar with Call now / Message us; 48px+ tap targets.
- SEO: unique title and description per page, canonical URLs, sitemap, LocalBusiness (with the Rahway address) + Breadcrumb structured data.

## 4. Open questions for the client

1. Google Business Profile link. (Address is set: 363 E Milton Ave, Rahway, NJ 07065.)
2. The real New York phone number; the liability form PDF; the final domain.
3. EmailJS values in Netlify (service ID, template ID, public key) and allowed origins.
4. Which chairs and sizes they actually have; photos of their own chairs. The two lift chair photos supplied in chat look like manufacturer or retail images, so they were not published; confirm usage rights or send their own.
5. Rental terms: minimum period, deposit, delivery fee, cancellation, damage. Terms of rental and privacy policy need real text.
6. Delivery claims on the site must be true: delivery, set-up and remote demonstration, pickup at the end, no purchase needed.
7. Exact coverage in NYC and NJ and "surrounding areas"; unique local copy per area page.
8. About/owner story is intentionally omitted from the simple sitemap; add later if wanted. Same for guides and reviews.
9. Analytics or call tracking (not set up).
10. ~~Rental periods~~ Confirmed: weekly (2-week minimum), 6-week, long-term. Also confirmed: every chair lifts and reclines, same/next-day delivery may be available, styles vary, free pickup.
12. ~~About page owner~~ Done: Arvind Dhankhad, photo and story supplied.
11. Is the logo available as an original vector file? The current SVGs were traced from the PNG.
