import Link from "next/link";
import { SITE } from "@/lib/site";

export function StickyBar() {
  return (
    <div className="sticky-bar">
      <a className="btn" href={SITE.phoneHref}>Call now</a>
      <Link className="btn ghost" href="/contact/">Message us</Link>
    </div>
  );
}
