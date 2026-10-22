import Link from "next/link";
import { CATEGORIES, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <h3>{SITE.name}</h3>
            <p>Medical equipment rental in Greensboro, Winston-Salem and nearby.</p>
            <p>
              <a href={SITE.phoneHref}>{SITE.phone}</a>
              {SITE.address && (<><br />{SITE.address.street}, {SITE.address.city}, NC {SITE.address.zip}</>)}
              {SITE.hours && (<><br />{SITE.hours}</>)}
            </p>
          </div>
          <div>
            <h3>Rentals</h3>
            <ul className="list" style={{ listStyle: "none", padding: 0 }}>
              {CATEGORIES.map((c) => (
                <li key={c.slug}><Link href={`/rentals/${c.slug}/`}>{c.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul className="list" style={{ listStyle: "none", padding: 0 }}>
              <li><Link href="/who-we-serve/">Who we serve</Link></li>
              <li><Link href="/service-areas/">Service areas</Link></li>
              <li><Link href="/guides/">Guides</Link></li>
              <li><Link href="/reviews/">Reviews</Link></li>
              <li><Link href="/how-renting-works/">How renting works</Link></li>
              <li><Link href="/faq/">FAQ</Link></li>
              <li><Link href="/about/">About</Link></li>
              <li><Link href="/contact/">Contact</Link></li>
              <li><Link href="/get-a-quote/">Get a quote</Link></li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul className="list" style={{ listStyle: "none", padding: 0 }}>
              <li><Link href="/privacy-policy/">Privacy policy</Link></li>
              <li><Link href="/terms-of-rental/">Terms of rental</Link></li>
              <li><Link href="/photo-credits/">Photo credits</Link></li>
            </ul>
          </div>
        </div>
        <div className="legal">© {new Date().getFullYear()} {SITE.name}. Equipment rental does not replace medical advice.</div>
      </div>
    </footer>
  );
}
