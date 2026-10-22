import { SITE, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./ContactButtons";

export function StickyBar() {
  return (
    <div className="sticky-bar">
      <a className="btn" href={SITE.phoneHref}>Call now</a>
      <a className="btn wa" href={waLink()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> WhatsApp</a>
    </div>
  );
}
