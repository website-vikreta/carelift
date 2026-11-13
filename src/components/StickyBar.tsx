import Link from "next/link";
import { SITE } from "@/lib/site";

export function StickyBar() {
  return (
    <div className="sticky-bar">
      <a className="btn" href={SITE.phoneHref} data-gtm-event="call" data-gtm-label="sticky_bar">Call now</a>
      <Link className="btn ghost" href="/contact/" data-gtm-event="check_availability" data-gtm-label="sticky_bar">Check availability</Link>
    </div>
  );
}
