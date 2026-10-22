import Link from "next/link";
import { GUIDES } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Guides: Choosing Medical Equipment", "Plain-language guides on renting and choosing hospital beds, lift chairs and other home medical equipment.", "/guides/");

export default function Guides() {
  return (
    <section className="section first">
      <div className="wrap">
        <h1>Guides</h1>
        <p className="lead">Helpful, plain-language advice on choosing and preparing for medical equipment at home.</p>
        <ul className="rows" style={{ marginTop: 28 }}>
          {GUIDES.map((g) => (
            <li key={g.slug}><Link href={`/guides/${g.slug}/`}><span className="name">{g.title}</span></Link></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
