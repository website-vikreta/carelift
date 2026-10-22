import Link from "next/link";
import { AUDIENCES, CATEGORIES, FAQS, SITE } from "@/lib/site";
import { ContactButtons } from "@/components/ContactButtons";
import { CtaBand } from "@/components/CtaBand";
import { HomeCheckDoodle, PhoneDoodle, Underline, VanDoodle } from "@/components/Doodles";
import { Photo } from "@/components/Photo";
import { Tile } from "@/components/Tile";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>
              Medical equipment rental in <Underline>Greensboro</Underline> and Winston-Salem
            </h1>
            <p className="lead">Hospital beds, lift chairs, wheelchairs and more. We deliver, set up and collect. Call us for pricing.</p>
            <ContactButtons />
            <p className="small hero-note">Serving {SITE.areaText}. Open {SITE.hours}.</p>
          </div>
          <Photo id="hero" ratio="4:3" priority />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <h2>What we <Underline>rent</Underline></h2>
            <Link href="/rentals/">All rentals</Link>
          </div>
          <ul className="tiles">
            {CATEGORIES.map((c) => (
              <Tile key={c.slug} href={`/rentals/${c.slug}/`} photoId={`cat-${c.slug}`} name={c.name} desc={c.tagline} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <h2>Who we help</h2>
            <Link href="/who-we-serve/">See all</Link>
          </div>
          <ul className="tiles four">
            {AUDIENCES.map((a) => (
              <Tile key={a.slug} href={`/who-we-serve/${a.slug}/`} photoId={`aud-${a.slug}`} name={a.name} desc={a.headline} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <Photo id="delivery" ratio="3:2" />
          <div>
            <h2>How renting works</h2>
            <ol className="steps">
              <li><PhoneDoodle /><h3>Call or message us</h3><p>Tell us what you need, for how long, and where it is going.</p></li>
              <li><VanDoodle /><h3>We deliver and set up</h3><p>We bring the equipment, set it up and show you how it works.</p></li>
              <li><HomeCheckDoodle /><h3>We collect it</h3><p>When you are done, we pick it up. No long-term commitment.</p></li>
            </ol>
          </div>
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
