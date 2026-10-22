import Link from "next/link";
import { SITE } from "@/lib/site";

export function CtaBand() {
  return (
    <section className="section cta-band">
      <div className="wrap">
        <h2>Need equipment in Greensboro or Winston-Salem?</h2>
        <p className="lead">Call for pricing and availability. We will help you choose the right item.</p>
        <div className="btn-row">
          <a className="btn" href={SITE.phoneHref}>Call {SITE.phone}</a>
          <Link className="btn secondary" href="/get-a-quote/">Request a quote</Link>
        </div>
      </div>
    </section>
  );
}
