import { pageMeta } from "@/lib/seo";
import { Areas } from "@/components/Areas";
import { CtaBand } from "@/components/CtaBand";
import { Deco } from "@/components/Deco";

export const metadata = pageMeta("Lift Chair Delivery: New York City & New Jersey", "We deliver and set up rental lift chairs in New York City and New Jersey, plus some surrounding areas.", "/service-areas/");

export default function AreasPage() {
  return (
    <>
      <section className="section first">
        <Deco kind="squiggle" className="o-sec-squiggle" />
        <div className="wrap">
          <h1>Where we deliver</h1>
          <p className="lead">We deliver, set up and collect lift chairs in New York City and New Jersey, plus some surrounding areas. Call with your address and we will confirm.</p>
          <div style={{ marginTop: 32 }}><Areas /></div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
