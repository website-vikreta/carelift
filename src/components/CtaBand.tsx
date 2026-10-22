import { SITE, waLink } from "@/lib/site";
import Link from "next/link";
import { WhatsAppIcon } from "./ContactButtons";

export function CtaBand() {
  return (
    <section className="section cta-band">
      <div className="wrap">
        <h2>Need equipment in Greensboro or Winston-Salem?</h2>
        <p className="lead">Call for pricing and availability. We will help you choose the right item.</p>
        <div className="btn-row">
          <a className="btn" href={SITE.phoneHref}>Call {SITE.phone}</a>
          <a className="btn wa" href={waLink()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> WhatsApp us</a>
        </div>
        <p className="form-link">Prefer a form? <Link href="/get-a-quote/">Request a callback</Link></p>
      </div>
    </section>
  );
}
