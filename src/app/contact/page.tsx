import Link from "next/link";
import { SITE } from "@/lib/site";
import { ContactButtons } from "@/components/ContactButtons";
import { Cities } from "@/components/Cities";
import { Deco } from "@/components/Deco";
import { Photo } from "@/components/Photo";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Contact CareLift Medical Equipment", "Call or WhatsApp CareLift Medical Equipment for medical equipment rentals in Greensboro and Winston-Salem, NC.", "/contact/");

export default function Contact() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <h1>Talk to us</h1>
            <p className="lead">Call or message us on WhatsApp for pricing and availability. A real person answers.</p>
            <ContactButtons />
            <ul className="facts">
              <li>Phone and WhatsApp: <a href={SITE.phoneHref}>{SITE.phone}</a></li>
              {SITE.hours && <li>{SITE.hours}</li>}
              {SITE.address && <li>{SITE.address.street}, {SITE.address.city}, NC {SITE.address.zip}</li>}
            </ul>
            {/* TODO: embed Google Map + GBP review link once address is confirmed. */}
          </div>
          <div className="media">
            <Deco kind="blob" className="o-hero-blob" />
            <Deco kind="ring" className="o-hero-ring" />
            <Photo id="contact" ratio="4:5" priority sizes="(min-width: 760px) 500px, calc(100vw - 40px)" />
          </div>
        </div>
      </section>
      <section className="section sand">
        <div className="wrap">
          <div className="sec-head"><h2>Where we deliver</h2><Link className="more" href="/service-areas/">Service areas</Link></div>
          <Cities />
        </div>
      </section>
    </>
  );
}
