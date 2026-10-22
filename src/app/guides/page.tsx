import Link from "next/link";
import { GUIDES } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Guides: Choosing Medical Equipment", "Plain-language guides on renting and choosing hospital beds, lift chairs and other home medical equipment.", "/guides/");

export default function Guides() {
  return (
    <section className="section">
      <div className="wrap">
        <h1>Guides</h1>
        <p className="lead">Helpful, plain-language advice on choosing and preparing for medical equipment at home.</p>
        <div className="grid c3" style={{ marginTop: 28 }}>
          {GUIDES.map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}/`} className="card">
              <div className="body"><h3>{g.title}</h3><p>{g.description}</p></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
