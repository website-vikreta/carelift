import type { Metadata } from "next";
import { COUNTIES, SITE } from "./site";

export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: SITE.name, type: "website", locale: "en_US" },
  };
}

export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: SITE.name,
    url: SITE.url,
    telephone: SITE.phone,
    areaServed: COUNTIES.map((c) => ({ "@type": "AdministrativeArea", name: `${c.name} County, NC` })),
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:00", closes: "18:00" }],
    ...(SITE.address && SITE.addressConfirmed && {
      address: { "@type": "PostalAddress", streetAddress: SITE.address.street, addressLocality: SITE.address.city, addressRegion: "NC", postalCode: SITE.address.zip, addressCountry: "US" },
    }),
    ...(SITE.gbpUrl && { sameAs: [SITE.gbpUrl] }),
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${SITE.url}${it.path}` })),
  };
}
