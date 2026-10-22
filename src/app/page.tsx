import Link from "next/link";
import { CATEGORIES, FAQS, SITE } from "@/lib/site";
import { Placeholder } from "@/components/Placeholder";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">New Jersey medical equipment rental</p>
            <h1>Home from hospital tomorrow? Equipment can be in the room tonight.</h1>
            <p className="lead">
              Hospital beds, wheelchairs, lift chairs and more, delivered, set up and collected across New Jersey. Call for pricing.
            </p>
            <div className="btn-row">
              <a className="btn" href={SITE.phoneHref}>Call {SITE.phone}</a>
              <Link className="btn secondary" href="/get-a-quote/">Request a quote</Link>
            </div>
          </div>
          <Placeholder label="Hero: hospital bed in a bright home bedroom" />
        </div>
      </section>

      <div className="wrap trust">
        <div><strong>All of New Jersey</strong>Delivery to every county</div>
        <div><strong>Set up for you</strong>Delivered and demonstrated</div>
        <div><strong>Sanitised</strong>Cleaned after every rental</div>
        <div><strong>Hospitals welcome</strong>Home and facility rentals</div>
      </div>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Rentals</p>
          <h2>What are you looking for?</h2>
          <div className="grid c3">
            {CATEGORIES.map((c) => (
              <Link key={c.slug} href={`/rentals/${c.slug}/`} className="card">
                <Placeholder label={c.name} wide />
                <div className="body"><h3>{c.name}</h3><p>{c.tagline}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <p className="eyebrow">How it works</p>
          <h2>Three simple steps</h2>
          <ol className="steps">
            <li><h3>Call or request a quote</h3><p>Tell us what you need and your ZIP code. We confirm availability and pricing.</p></li>
            <li><h3>We deliver and set up</h3><p>Our team brings the equipment, sets it up and shows you how to use it.</p></li>
            <li><h3>We collect it</h3><p>When you are finished, we pick it up. No long-term commitment.</p></li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Who we serve</p>
          <h2>For families, and for facilities</h2>
          <div className="grid c2">
            <div><h3>Home and family</h3><p>Recovering after surgery, caring for a parent, or arranging hospice care at home. We keep it simple and walk you through it.</p></div>
            <div><h3>Hospitals and facilities</h3><p>Reliable rental supply for hospitals, rehab centres and care providers. Call to discuss volume and scheduling.</p></div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap">
          <p className="eyebrow">Questions</p>
          <h2>Good to know</h2>
          {FAQS.slice(0, 4).map((f) => (
            <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
          <p style={{ marginTop: 20 }}><Link href="/faq/">See all questions</Link></p>
        </div>
      </section>

      <CtaBand />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.slice(0, 4).map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
    </>
  );
}
