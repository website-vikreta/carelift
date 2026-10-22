import { AUDIENCES } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";
import { Tile } from "@/components/Tile";

export const metadata = pageMeta("Who We Serve", "Medical equipment rental for families, post-surgery recovery, hospice care and facilities in Greensboro and Winston-Salem, NC.", "/who-we-serve/");

export default function Who() {
  return (
    <>
      <section className="section first">
        <div className="wrap">
          <h1>Who we serve</h1>
          <p className="lead">One bed for a family member, or equipment for a care facility.</p>
          <ul className="tiles" style={{ marginTop: 32 }}>
            {AUDIENCES.map((a) => (
              <Tile key={a.slug} href={`/who-we-serve/${a.slug}/`} photoId={`aud-${a.slug}`} name={a.name} desc={a.headline} />
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
