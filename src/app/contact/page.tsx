import { SITE } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Contact CareLift Medical Equipment", "Call or send a message to rent a lift chair in New Jersey and surrounding areas, including New York City.", "/contact/");

export default function Contact() {
  return (
    <section className="hero">
      <div className="wrap cols">
        <div>
          <h1>Contact Us</h1>
          <p className="lead">Call us, or check availability below and we will call you back.</p>
          <div className="btn-row"><a className="btn" href={SITE.phoneHref} data-gtm-event="call" data-gtm-label="contact_page">Call {SITE.phone}</a></div>
          <ul className="facts">
            <li>{SITE.hours}</li>
            <li>Delivering across {SITE.areaText}</li>
            {SITE.gbpUrl && <li><a href={SITE.gbpUrl} target="_blank" rel="noopener noreferrer" data-gtm-event="view_on_google" data-gtm-label="contact_page">View on Google</a></li>}
          </ul>
        </div>
        <div>
          <h2>Check availability</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
