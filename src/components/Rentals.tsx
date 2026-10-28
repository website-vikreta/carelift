import { RENTALS, SITE } from "@/lib/site";

// Rental periods. Prices are never shown.
export function Rentals() {
  return (
    <ul className="options">
      {RENTALS.map((r) => (
        <li key={r.name}>
          <h3>{r.name}</h3>
          <p>{r.text}</p>
          <a className="price" href={SITE.phoneHref}>Call for pricing</a>
        </li>
      ))}
    </ul>
  );
}
