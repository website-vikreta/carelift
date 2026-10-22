import Link from "next/link";
import { COUNTIES } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";

export const metadata = pageMeta("Medical Equipment Rental Service Areas: Greensboro & Winston-Salem, NC", "CareLift delivers medical equipment rentals in Guilford and Forsyth County, North Carolina.", "/service-areas/");

export default function Areas() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <h1>Where we deliver</h1>
          <p className="lead">We deliver, set up and collect medical equipment in Guilford County and Forsyth County. More areas coming soon.</p>
          <ul className="pills" style={{ marginTop: 28 }}>
            {COUNTIES.map((c) => <li key={c.slug}><Link href={`/service-areas/${c.slug}/`}>{c.name} County</Link></li>)}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
