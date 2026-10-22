import Link from "next/link";
import { CATEGORIES } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";

export const metadata = pageMeta("Medical Equipment Rentals in Greensboro & Winston-Salem, NC", "Hospital beds, wheelchairs, lift chairs, scooters and more to rent in Greensboro, Winston-Salem and nearby. Call for pricing.", "/rentals/");

export default function Rentals() {
  return (
    <>
      <section className="section first">
        <div className="wrap">
          <h1>Equipment rentals</h1>
          <p className="lead">Choose a category. Call or message us for pricing and availability.</p>
          <ul className="rows" style={{ marginTop: 28 }}>
            {CATEGORIES.map((c) => (
              <li key={c.slug}><Link href={`/rentals/${c.slug}/`}><span className="name">{c.name}</span><span className="desc">{c.tagline}</span></Link></li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
