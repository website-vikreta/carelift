import Link from "next/link";
import { PRODUCT, SITE } from "@/lib/site";
import { GALLERY } from "@/lib/images";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { Areas } from "@/components/Areas";
import { ContactButtons } from "@/components/ContactButtons";
import { CtaBand } from "@/components/CtaBand";
import { Deco } from "@/components/Deco";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { Steps } from "@/components/Steps";

export const metadata = pageMeta("Lift Chair Rental in New York City & New Jersey", `${PRODUCT.intro} Call ${SITE.name} for pricing.`, `/${PRODUCT.slug}/`);

export default function LiftChairs() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Lift chair rental", path: `/${PRODUCT.slug}/` }])} />
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / Lift chair rental</nav>
            <h1>Lift chair rental in New York City and New Jersey</h1>
            <p className="lead">{PRODUCT.intro}</p>
            <ContactButtons />
          </div>
          <div className="media">
            <Deco kind="blob" className="o-hero-blob" />
            <Deco kind="ring" className="o-hero-ring" />
            <Photo id="chair-page" ratio="4:3" priority sizes="(min-width: 760px) 500px, calc(100vw - 40px)" />
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="gallery">
          {GALLERY.map((p) => <Photo key={p.src} photo={p} ratio="3:2" sizes="(min-width: 760px) 540px, calc(100vw - 40px)" />)}
        </div>
      </div>

      <section className="section sand">
        <div className="wrap cols">
          <div>
            <h2>Why people rent a lift chair</h2>
            <ul className="list">{PRODUCT.benefits.map((b) => <li key={b}>{b}</li>)}</ul>
            <h3 style={{ marginTop: 32 }}>Who it is for</h3>
            <p>{PRODUCT.forWho}</p>
          </div>
          <div>
            <h2>Which chair fits</h2>
            <p>{PRODUCT.sizing}</p>
            <h3 style={{ marginTop: 32 }}>What is included</h3>
            <ul className="list">{PRODUCT.included.map((i) => <li key={i}>{i}</li>)}</ul>
            <p className="small" style={{ marginTop: 24 }}>Pricing depends on the chair and how long you need it. <a href={SITE.phoneHref}>Call {SITE.phone}</a> for a quote.</p>
          </div>
        </div>
      </section>

      <section className="section deep">
        <Deco kind="ring" className="o-deep-ring" />
        <div className="wrap">
          <div className="sec-head"><h2>How renting works</h2><Link className="more" href="/how-it-works/">More detail</Link></div>
          <Steps />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head"><h2>Where we deliver</h2><Link className="more" href="/service-areas/">Service areas</Link></div>
          <Areas />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
