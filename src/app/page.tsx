import Link from "next/link";
import { AUDIENCES, CATEGORIES, FAQS, SITE } from "@/lib/site";
import { Cities } from "@/components/Cities";
import { ContactButtons } from "@/components/ContactButtons";
import { CtaBand } from "@/components/CtaBand";
import { Deco } from "@/components/Deco";
import { Photo } from "@/components/Photo";
import { Steps } from "@/components/Steps";
import { Tile } from "@/components/Tile";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="kicker">Greensboro &amp; Winston-Salem, NC</p>
            <h1>Medical equipment, delivered and set up at home</h1>
            <p className="lead">Rent hospital beds, lift chairs, wheelchairs, walkers and more. We bring it, set it up and collect it when you are done.</p>
            <ContactButtons />
            <ul className="facts">
              <li>Delivered and set up in the room you choose</li>
              <li>Short- and long-term rentals, no purchase needed</li>
              <li>Open {SITE.hours}</li>
            </ul>
          </div>
          <div className="media">
            <Deco kind="blob" className="o-hero-blob" />
            <Deco kind="ring" className="o-hero-ring" />
            <Deco kind="dots" className="o-hero-dots" />
            <Deco kind="spark" className="o-hero-spark" />
            <Photo id="hero" ratio="4:5" priority sizes="(min-width: 760px) 500px, calc(100vw - 40px)" />
          </div>
        </div>
      </section>

      <section className="section">
        <Deco kind="dots" className="o-sec-dots" />
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2>What we rent</h2>
              <p className="small">Nine kinds of equipment, all delivered and set up. Call for pricing.</p>
            </div>
            <Link className="more" href="/rentals/">All rentals</Link>
          </div>
          <ul className="tiles">
            {CATEGORIES.map((c) => (
              <Tile key={c.slug} href={`/rentals/${c.slug}/`} photoId={`cat-${c.slug}`} name={c.name} desc={c.tagline} />
            ))}
          </ul>
        </div>
      </section>

      <section className="section deep">
        <Deco kind="ring" className="o-deep-ring" />
        <Deco kind="arc" className="o-deep-arc" />
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="kicker" style={{ color: "var(--apricot)" }}>Simple from start to finish</p>
              <h2>How renting works</h2>
            </div>
            <Link className="more" href="/how-renting-works/">More detail</Link>
          </div>
          <Steps />
          <div style={{ marginTop: 40 }}><ContactButtons showForm={false} /></div>
        </div>
      </section>

      <section className="section sand">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2>Who we help</h2>
              <p className="small">Families at home, people recovering from surgery, hospice care and care facilities.</p>
            </div>
            <Link className="more" href="/who-we-serve/">See all</Link>
          </div>
          <ul className="scroller">
            {AUDIENCES.map((a) => (
              <Tile key={a.slug} href={`/who-we-serve/${a.slug}/`} photoId={`aud-${a.slug}`} name={a.name} desc={a.headline} ratio="4:5" sizes="(min-width: 760px) 270px, 74vw" />
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <Deco kind="squiggle" className="o-sec-squiggle" />
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2>Local to the Triad</h2>
              <p className="small">We deliver across Guilford and Forsyth County.</p>
            </div>
            <Link className="more" href="/service-areas/">Service areas</Link>
          </div>
          <Cities />
        </div>
      </section>

      <section className="section sand">
        <div className="wrap cols">
          <div>
            <h2>Questions, answered</h2>
            <p className="lead">Still deciding? These are the questions families ask us most.</p>
            <p><Link className="more" href="/faq/">All questions</Link></p>
          </div>
          <div>
            {FAQS.slice(0, 4).map((f) => (
              <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
