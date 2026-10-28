import type { MetadataRoute } from "next";
import { PRODUCT, SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", `/${PRODUCT.slug}/`, "/about/", "/contact/", "/terms-of-rental/", "/privacy-policy/"];
  return paths.map((p) => ({ url: `${SITE.url}${p}` }));
}
