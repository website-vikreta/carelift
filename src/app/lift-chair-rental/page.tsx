import Link from "next/link";
import { PRODUCT, SITE, SURGERIES } from "@/lib/site";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { ContactButtons } from "@/components/ContactButtons";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { Rentals } from "@/components/Rentals";

export const metadata = pageMeta(
  "Lift Chair Rental Options: Weekly, 6-Week & Long-Term",
  `Rent a power lift chair in New York City or New Jersey: weekly (2-week minimum), 6-week or long-term. Delivered, set up and picked up for free. Call ${SITE.phone} for pricing.`,
  `/${PRODUCT.slug}/`,
);

export default function LiftChairRental() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Rental options", path: `/${PRODUCT.slug}/` }])} />
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / Rental options</nav>
            <h1>Lift chair rental options</h1>
            <p className="lead">{PRODUCT.intro}</p>
            <ContactButtons />
          </div>
          <Photo id="rental-page" ratio="4:5" priority sizes="(min-width: 760px) 500px, calc(100vw - 40px)" />
        </div>
      </section>

      <section className="section sand">
        <div className="wrap">
          <h2>Choose a rental period</h2>
          <Rentals />
        </div>
      </section>

      <section className="section">
        <div className="wrap cols">
          <div>
            <h2>Every rental includes</h2>
            <ul className="list">{PRODUCT.included.map((i) => <li key={i}>{i}</li>)}</ul>
            <p className="small">Every chair lifts and reclines. Styles vary with availability.</p>
          </div>
          <div>
            <h2>Often rented after</h2>
            <ul className="list">{SURGERIES.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </div>
      </section>

      <CtaBand title="Call to check availability" />
    </>
  );
}
