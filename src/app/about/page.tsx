import { SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";

export const metadata = pageMeta("About CareLift Medical Equipment", "A medical equipment rental business serving homes, hospitals and care facilities in Greensboro and Winston-Salem, NC.", "/about/");

export default function About() {
  return (
    <>
      <section className="section first">
        <div className="wrap">
          <h1>About {SITE.name}</h1>
          {/* TODO: replace with the real story, team and credentials once provided. */}
          <p className="lead">We rent medical equipment to families, hospitals and care facilities in Guilford and Forsyth County, with a focus on clear communication, fast delivery and well-maintained equipment.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
