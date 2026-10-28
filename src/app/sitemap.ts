import type { MetadataRoute } from "next";
import { PRODUCT, SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", `/${PRODUCT.slug}/`, "/contact/", "/terms-of-rental/", "/privacy-policy/", "/photo-credits/"];
  return paths.map((p) => ({ url: `${SITE.url}${p}` }));
}
