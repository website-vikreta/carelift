import { SITE } from "@/lib/site";
import { ContactButtons } from "@/components/ContactButtons";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Contact CareLift Medical Equipment", "Call or WhatsApp CareLift Medical Equipment for medical equipment rentals in Greensboro and Winston-Salem, NC.", "/contact/");

export default function Contact() {
  return (
    <section className="section">
      <div className="wrap">
        <h1>Contact us</h1>
        <p className="lead">Call or message us on WhatsApp for pricing and availability.</p>
        <ContactButtons />
        <p><strong>Phone:</strong> <a href={SITE.phoneHref}>{SITE.phone}</a></p>
        {SITE.address && <p><strong>Address:</strong> {SITE.address.street}, {SITE.address.city}, NC {SITE.address.zip}</p>}
        {SITE.hours && <p><strong>Hours:</strong> {SITE.hours}</p>}
        {/* TODO: embed Google Map + GBP review link once address is available. */}
      </div>
    </section>
  );
}
