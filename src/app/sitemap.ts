import type { MetadataRoute } from "next";
import { CATEGORIES, COUNTIES, SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/rentals/", ...CATEGORIES.map((c) => `/rentals/${c.slug}/`),
    "/service-areas/", ...COUNTIES.map((c) => `/service-areas/${c.slug}/`),
    "/how-renting-works/", "/faq/", "/about/", "/contact/", "/get-a-quote/", "/privacy-policy/", "/terms-of-rental/",
  ];
  return paths.map((p) => ({ url: `${SITE.url}${p}` }));
}
