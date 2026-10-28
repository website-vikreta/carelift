import { SITE } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";
import { MapEmbed } from "@/components/MapEmbed";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Contact CareLift Medical Equipment", "Call or send a message to rent a lift chair in New York City or New Jersey. Based in Rahway, NJ.", "/contact/");

export default function Contact() {
  const a = SITE.address;
  return (
    <section className="hero">
      <div className="wrap cols">
        <div>
          <h1>Contact us</h1>
          <p className="lead">Call us, or check availability below and we will call you back.</p>
          <div className="btn-row"><a className="btn" href={SITE.phoneHref}>Call {SITE.phone}</a></div>
          <ul className="facts">
            <li>{SITE.hours}</li>
            {a && <li><a href={SITE.mapsHref}>{a.street}, {a.city}, {a.state} {a.zip}</a></li>}
            <li>Delivering across {SITE.areaText}</li>
          </ul>
          <MapEmbed />
        </div>
        <div>
          <h2>Check availability</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
