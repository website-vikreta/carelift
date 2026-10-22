import Link from "next/link";
import { AUDIENCES } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";

export const metadata = pageMeta("Who We Serve", "Medical equipment rental for families, post-surgery recovery, hospice care and facilities in Greensboro and Winston-Salem, NC.", "/who-we-serve/");

export default function Who() {
  return (
    <>
      <section className="section first">
        <div className="wrap">
          <h1>Who we serve</h1>
          <p className="lead">One bed for a family member, or equipment for a care facility.</p>
          <ul className="rows" style={{ marginTop: 28 }}>
            {AUDIENCES.map((a) => (
              <li key={a.slug}><Link href={`/who-we-serve/${a.slug}/`}><span className="name">{a.name}</span><span className="desc">{a.headline}</span></Link></li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
