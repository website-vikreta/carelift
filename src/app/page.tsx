import Link from "next/link";
import { AREAS, PRODUCT } from "@/lib/site";
import { faqLd } from "@/lib/seo";
import { ContactButtons } from "@/components/ContactButtons";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { MapEmbed } from "@/components/MapEmbed";
import { Photo } from "@/components/Photo";
import { Rentals } from "@/components/Rentals";
import { Steps } from "@/components/Steps";

export default function Home() {
  return (
    <>
      <JsonLd data={faqLd()} />
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>Lift chair rentals in New York City &amp; New Jersey</h1>
            <p className="lead">Delivered, set up and picked up. Weekly, 6-week or long-term.</p>
            <ContactButtons />
            <ul className="facts">
              <li>Every chair lifts and reclines</li>
              <li>Same or next-day delivery may be available</li>
            </ul>
          </div>
          <Photo id="hero" ratio="4:5" priority sizes="(min-width: 760px) 500px, calc(100vw - 40px)" />
        </div>
      </section>

      <section className="section sand">
        <div className="wrap split">
          <Photo id="chair" ratio="4:3" />
          <div>
            <h2>Comfort at home, when you need it most</h2>
            <p>{PRODUCT.intro}</p>
            <ul className="list">{PRODUCT.benefits.map((b) => <li key={b}>{b}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="wrap">
          <h2>How it works</h2>
          <Steps />
        </div>
      </section>

      <section className="section sand" id="rental-options">
        <div className="wrap">
          <h2>Rental options</h2>
          <Rentals />
          <p style={{ marginTop: 24 }}><Link className="more" href={`/${PRODUCT.slug}/`}>Rental details</Link></p>
        </div>
      </section>

      <section className="section" id="areas">
        <div className="wrap cols">
          <div>
            <h2>Where we deliver</h2>
            {AREAS.map((a) => (
              <div key={a.name}>
                <h3>{a.name}</h3>
                <p>{a.places}</p>
              </div>
            ))}
            <p className="small">Some surrounding areas too. Call to confirm.</p>
          </div>
          <MapEmbed />
        </div>
      </section>

      <section className="section sand" id="faq">
        <div className="wrap cols">
          <h2>Questions</h2>
          <Faq />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
