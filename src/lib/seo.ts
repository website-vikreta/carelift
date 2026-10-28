import type { Metadata } from "next";
import { AREAS, FAQS, OWNER, SITE } from "./site";

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
    founder: { "@type": "Person", name: OWNER.name },
    areaServed: AREAS.map((a) => ({ "@type": "AdministrativeArea", name: a.name })),
    openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:00", closes: "18:00" }],
    ...(SITE.address && {
      address: { "@type": "PostalAddress", streetAddress: SITE.address.street, addressLocality: SITE.address.city, addressRegion: SITE.address.state, postalCode: SITE.address.zip, addressCountry: "US" },
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

export function faqLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.list ? `${f.a} ${f.list.join(", ")}.` : f.a },
    })),
  };
}
