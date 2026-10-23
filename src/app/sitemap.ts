import type { MetadataRoute } from "next";
import { AREAS, PRODUCT, SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", `/${PRODUCT.slug}/`, "/how-it-works/",
    "/service-areas/", ...AREAS.map((a) => `/service-areas/${a.slug}/`),
    "/faq/", "/contact/", "/terms-of-rental/", "/privacy-policy/", "/photo-credits/",
  ];
  return paths.map((p) => ({ url: `${SITE.url}${p}` }));
}
