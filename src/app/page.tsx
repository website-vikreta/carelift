import Link from "next/link";
import { FAQS, PRODUCT, SITE } from "@/lib/site";
import { Areas } from "@/components/Areas";
import { ContactButtons } from "@/components/ContactButtons";
import { CtaBand } from "@/components/CtaBand";
import { Deco } from "@/components/Deco";
import { Photo } from "@/components/Photo";
import { Steps } from "@/components/Steps";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="kicker">New York City &amp; New Jersey</p>
            <h1>Lift chair rentals, delivered to your home</h1>
            <p className="lead">Rent a power lift chair for recovery, comfort or easier everyday life. We deliver it, set it up and collect it when you are done.</p>
            <ContactButtons />
            <ul className="facts">
              <li>Delivered and set up in the room you choose</li>
              <li>Private rentals, no purchase needed</li>
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
        <div className="wrap split">
          <div className="media">
            <Deco kind="blob" className="o-media-blob" />
            <Photo id="chair" ratio="4:3" />
          </div>
          <div>
            <h2>A chair that helps you stand</h2>
            <p>{PRODUCT.intro}</p>
            <ul className="list">{PRODUCT.benefits.map((b) => <li key={b}>{b}</li>)}</ul>
            <p><Link className="more" href={`/${PRODUCT.slug}/`}>More about our lift chairs</Link></p>
          </div>
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
            <Link className="more" href="/how-it-works/">More detail</Link>
          </div>
          <Steps />
          <div style={{ marginTop: 40 }}><ContactButtons /></div>
        </div>
      </section>

      <section className="section">
        <Deco kind="squiggle" className="o-sec-squiggle" />
        <div className="wrap">
          <div className="sec-head">
            <div>
              <h2>Where we deliver</h2>
              <p className="small">New York City and New Jersey, plus some surrounding areas.</p>
            </div>
            <Link className="more" href="/service-areas/">Service areas</Link>
          </div>
          <Areas />
        </div>
      </section>

      <section className="section sand">
        <div className="wrap cols">
          <div>
            <h2>Questions, answered</h2>
            <p className="lead">The things people ask us most before renting.</p>
            <p><Link className="more" href="/faq/">All questions</Link></p>
          </div>
          <div>
            {FAQS.slice(0, 5).map((f) => (
              <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
