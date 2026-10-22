import Link from "next/link";
import { AUDIENCES } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";

export const metadata = pageMeta("Who We Serve", "Medical equipment rental for families, post-surgery recovery, hospice care and hospitals in Greensboro and Winston-Salem, NC.", "/who-we-serve/");

export default function Who() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <h1>Who we serve</h1>
          <p className="lead">Whether it is one bed for a family member or equipment for a care facility, we make rental straightforward.</p>
          <div className="grid c2" style={{ marginTop: 28 }}>
            {AUDIENCES.map((a) => (
              <Link key={a.slug} href={`/who-we-serve/${a.slug}/`} className="card">
                <div className="body"><h3>{a.name}</h3><p>{a.headline}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
