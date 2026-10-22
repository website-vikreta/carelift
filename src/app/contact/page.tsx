import { SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Contact CareLift Medical Equipment", "Call or text CareLift Medical Equipment for New Jersey medical equipment rentals.", "/contact/");

export default function Contact() {
  return (
    <section className="section">
      <div className="wrap">
        <h1>Contact us</h1>
        <p className="lead">Call or text for pricing and availability.</p>
        <p><strong>Phone:</strong> <a href={SITE.phoneHref}>{SITE.phone}</a></p>
        {SITE.address && <p><strong>Address:</strong> {SITE.address.street}, {SITE.address.city}, NJ {SITE.address.zip}</p>}
        {SITE.hours && <p><strong>Hours:</strong> {SITE.hours}</p>}
        <div className="btn-row">
          <a className="btn" href={SITE.phoneHref}>Call now</a>
          <a className="btn secondary" href={SITE.smsHref}>Send a text</a>
        </div>
        {/* TODO: embed Google Map + GBP review link once address is available. */}
      </div>
    </section>
  );
}
