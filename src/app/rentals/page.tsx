import Link from "next/link";
import { CATEGORIES } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { Placeholder } from "@/components/Placeholder";
import { CtaBand } from "@/components/CtaBand";

export const metadata = pageMeta("Medical Equipment Rentals in North Carolina", "Browse hospital beds, wheelchairs, mobility aids, lift chairs and more available to rent across North Carolina. Call for pricing.", "/rentals/");

export default function Rentals() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <h1>Medical equipment rentals in North Carolina</h1>
          <p className="lead">Choose a category to see what we rent. Call us for pricing and availability.</p>
          <div className="grid c3" style={{ marginTop: 32 }}>
            {CATEGORIES.map((c) => (
              <Link key={c.slug} href={`/rentals/${c.slug}/`} className="card">
                <Placeholder label={c.name} wide />
                <div className="body"><h3>{c.name}</h3><p>{c.tagline}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
