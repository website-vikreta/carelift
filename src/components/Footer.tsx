import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h3>{SITE.name}</h3>
            <p>Lift chair rentals delivered to your home in {SITE.areaText}.</p>
            <p>
              <a href={SITE.phoneHref}>{SITE.phone}</a>
              <br />
              {SITE.hours}
              {SITE.address && (<><br />{SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}</>)}
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            <ul>
              <li><Link href="/lift-chair-rental/">Lift chair rental</Link></li>
              <li><Link href="/how-it-works/">How it works</Link></li>
              <li><Link href="/service-areas/">Where we deliver</Link></li>
              <li><Link href="/faq/">FAQ</Link></li>
              <li><Link href="/contact/">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3>Rental paperwork</h3>
            <ul>
              <li><a href={SITE.liabilityFormHref} download>Download liability form (PDF)</a></li>
              <li><Link href="/terms-of-rental/">Terms of rental</Link></li>
              <li><Link href="/privacy-policy/">Privacy policy</Link></li>
              <li><Link href="/photo-credits/">Photo credits</Link></li>
            </ul>
          </div>
        </div>
        <div className="legal">© {new Date().getFullYear()} {SITE.name}. Private rentals only.</div>
      </div>
    </footer>
  );
}
