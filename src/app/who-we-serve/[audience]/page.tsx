import Link from "next/link";
import { notFound } from "next/navigation";
import { AUDIENCES, CATEGORIES, SITE } from "@/lib/site";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Placeholder } from "@/components/Placeholder";

type Params = { audience: string };
export const dynamicParams = false;
export const generateStaticParams = () => AUDIENCES.map((a) => ({ audience: a.slug }));

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { audience } = await params;
  const a = AUDIENCES.find((x) => x.slug === audience);
  if (!a) return {};
  return pageMeta(`${a.name}: Medical Equipment Rental in ${SITE.region}`, a.intro, `/who-we-serve/${a.slug}/`);
}

export default async function Audience({ params }: { params: Promise<Params> }) {
  const { audience } = await params;
  const a = AUDIENCES.find((x) => x.slug === audience);
  if (!a) notFound();
  const cats = CATEGORIES.filter((c) => a.categories.includes(c.slug));
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Who we serve", path: "/who-we-serve/" }, { name: a.name, path: `/who-we-serve/${a.slug}/` }])} />
      <section className="section">
        <div className="wrap hero-grid">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/who-we-serve/">Who we serve</Link> / {a.name}</nav>
            <h1>{a.headline}</h1>
            <p className="lead">{a.intro}</p>
            <div className="btn-row">
              <a className="btn" href={SITE.phoneHref}>Call for pricing</a>
              <Link className="btn secondary" href="/get-a-quote/">Request a quote</Link>
            </div>
          </div>
          <Placeholder label={a.name} />
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <h2>What to expect</h2>
          <ul className="list">{a.points.map((p) => <li key={p}>{p}</li>)}</ul>
          <h2 style={{ marginTop: 32 }}>Popular equipment</h2>
          <ul className="pills">{cats.map((c) => <li key={c.slug}><Link href={`/rentals/${c.slug}/`}>{c.name}</Link></li>)}</ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
