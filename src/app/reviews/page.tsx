import { SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";

export const metadata = pageMeta("Customer Reviews", "Read what CareLift Medical Equipment customers say.", "/reviews/");

// Reviews must be real. Add genuine Google reviews here (with permission/attribution) once the profile has them.
export default function Reviews() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <h1>Customer reviews</h1>
          <p className="lead">We are new and building our reputation one family at a time. Reviews will appear here as they come in.</p>
          {SITE.gbpUrl && <a className="btn" href={SITE.gbpUrl}>See reviews on Google</a>}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
