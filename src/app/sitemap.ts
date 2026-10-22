import type { MetadataRoute } from "next";
import { AUDIENCES, CATEGORIES, COUNTIES, GUIDES, SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/rentals/", ...CATEGORIES.map((c) => `/rentals/${c.slug}/`),
    "/service-areas/", ...COUNTIES.map((c) => `/service-areas/${c.slug}/`),
    "/who-we-serve/", ...AUDIENCES.map((a) => `/who-we-serve/${a.slug}/`),
    "/guides/", ...GUIDES.map((g) => `/guides/${g.slug}/`), "/reviews/",
    "/how-renting-works/", "/faq/", "/about/", "/contact/", "/get-a-quote/", "/privacy-policy/", "/terms-of-rental/",
  ];
  return paths.map((p) => ({ url: `${SITE.url}${p}` }));
}
