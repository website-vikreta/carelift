import Link from "next/link";
import { RENTALS, SITE } from "@/lib/site";

// Rental periods. Prices are never shown. "Check availability" opens the contact form with the period preselected.
export function Rentals() {
  return (
    <ul className="options">
      {RENTALS.map((r) => (
        <li key={r.name}>
          <h3>{r.name}</h3>
          <p>{r.text}</p>
          <Link className="btn" href={`/contact/?period=${encodeURIComponent(r.duration)}`}>Check availability</Link>
          <a className="price" href={SITE.phoneHref}>Or call for pricing</a>
        </li>
      ))}
    </ul>
  );
}
