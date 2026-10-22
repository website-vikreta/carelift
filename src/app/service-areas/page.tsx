import { pageMeta } from "@/lib/seo";
import { Cities } from "@/components/Cities";
import { CtaBand } from "@/components/CtaBand";
import { Deco } from "@/components/Deco";

export const metadata = pageMeta("Medical Equipment Rental Service Areas: Greensboro & Winston-Salem, NC", "CareLift delivers medical equipment rentals in Guilford and Forsyth County, North Carolina.", "/service-areas/");

export default function Areas() {
  return (
    <>
      <section className="section first">
        <Deco kind="squiggle" className="o-sec-squiggle" />
        <div className="wrap">
          <h1>Where we deliver</h1>
          <p className="lead">We deliver, set up and collect medical equipment across Guilford County and Forsyth County. More areas coming soon.</p>
          <div style={{ marginTop: 32 }}><Cities /></div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
