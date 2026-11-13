import Link from "next/link";
import { SITE } from "@/lib/site";

// The two ways to reach us: call, or check availability through the contact form.
export function ContactButtons() {
  return (
    <div className="btn-row">
      <a className="btn" href={SITE.phoneHref} data-gtm-event="call" data-gtm-label="contact_buttons">Call {SITE.phone}</a>
      <Link className="btn ghost" href="/contact/" data-gtm-event="check_availability" data-gtm-label="contact_buttons">Check availability</Link>
    </div>
  );
}
