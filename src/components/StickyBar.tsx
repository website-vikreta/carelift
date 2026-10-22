import Link from "next/link";
import { SITE } from "@/lib/site";

export function StickyBar() {
  return (
    <div className="sticky-bar">
      <a className="btn" href={SITE.phoneHref}>Call now</a>
      <a className="btn secondary" href={SITE.smsHref}>Text</a>
      <Link className="btn secondary" href="/get-a-quote/">Quote</Link>
    </div>
  );
}
