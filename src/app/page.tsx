import Link from "next/link";
import { CATEGORIES, FAQS, SITE } from "@/lib/site";
import { ContactButtons } from "@/components/ContactButtons";
import { CtaBand } from "@/components/CtaBand";
import { Photo } from "@/components/Photo";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>Medical equipment rental in Greensboro and Winston-Salem</h1>
            <p className="lead">Hospital beds, lift chairs, wheelchairs and more. We deliver, set up and collect. Call us for pricing.</p>
            <ContactButtons />
            <p className="small hero-note">Serving {SITE.areaText}. Open {SITE.hours}.</p>
          </div>
          <Photo id="hero" priority />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>What we rent</h2>
          <ul className="rows">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/rentals/${c.slug}/`}>
                  <span className="name">{c.name}</span>
                  <span className="desc">{c.tagline}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>How renting works</h2>
          <ol className="steps">
            <li><h3>Call or message us</h3><p>Tell us what you need, for how long, and where it is going.</p></li>
            <li><h3>We deliver and set up</h3><p>We bring the equipment, set it up and show you how it works.</p></li>
            <li><h3>We collect it</h3><p>When you are done, we pick it up. No long-term commitment.</p></li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap cols">
          <div>
            <h2>Where we deliver</h2>
            <p>Guilford County, including Greensboro and High Point, and Forsyth County, including Winston-Salem.</p>
            <p><Link href="/service-areas/">See service areas</Link></p>
          </div>
          <div>
            <h2>Common questions</h2>
            {FAQS.slice(0, 3).map((f) => (
              <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
            <p style={{ marginTop: 16 }}><Link href="/faq/">All questions</Link></p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
