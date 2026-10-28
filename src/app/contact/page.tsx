import { SITE } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Contact CareLift Medical Equipment", "Call or send a message to rent a lift chair in New York City or New Jersey. Based in Rahway, NJ.", "/contact/");

export default function Contact() {
  const a = SITE.address;
  return (
    <section className="hero">
      <div className="wrap cols">
        <div>
          <h1>Contact us</h1>
          <p className="lead">Call us, or send a message and we will call you back.</p>
          <div className="btn-row"><a className="btn" href={SITE.phoneHref}>Call {SITE.phone}</a></div>
          <ul className="facts">
            <li>{SITE.hours}</li>
            {a && <li><a href={SITE.mapsHref}>{a.street}, {a.city}, {a.state} {a.zip}</a></li>}
            <li>Delivering across {SITE.areaText}</li>
          </ul>
        </div>
        <div>
          <h2>Send a message</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
