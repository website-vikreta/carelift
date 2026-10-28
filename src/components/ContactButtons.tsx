import Link from "next/link";
import { SITE } from "@/lib/site";

// The two ways to reach us: call, or check availability through the contact form.
export function ContactButtons() {
  return (
    <div className="btn-row">
      <a className="btn" href={SITE.phoneHref}>Call {SITE.phone}</a>
      <Link className="btn ghost" href="/contact/">Check availability</Link>
    </div>
  );
}
