import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, COUNTIES, SITE } from "@/lib/site";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { ContactButtons } from "@/components/ContactButtons";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { Tile } from "@/components/Tile";
import { GALLERY } from "@/lib/images";

type Params = { category: string };
export const dynamicParams = false;
export const generateStaticParams = () => CATEGORIES.map((c) => ({ category: c.slug }));

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { category } = await params;
  const c = CATEGORIES.find((x) => x.slug === category);
  if (!c) return {};
  return pageMeta(`${c.name} Rental in ${SITE.region}`, `${c.intro} Call ${SITE.name} for pricing.`, `/rentals/${c.slug}/`);
}

export default async function Category({ params }: { params: Promise<Params> }) {
  const { category } = await params;
  const c = CATEGORIES.find((x) => x.slug === category);
  if (!c) notFound();
  const related = CATEGORIES.filter((x) => x.slug !== c.slug);
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Rentals", path: "/rentals/" }, { name: c.name, path: `/rentals/${c.slug}/` }])} />
      <section className="section first">
        <div className="wrap hero-grid">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/rentals/">Rentals</Link> / {c.name}</nav>
            <h1>{c.name} rental in Greensboro and Winston-Salem</h1>
            <p className="lead">{c.intro}</p>
            <ContactButtons topic={c.name} />
          </div>
          <Photo id={`cat-${c.slug}`} ratio="3:2" priority />
        </div>
      </section>

      {GALLERY[c.slug] && (
        <div className="wrap" style={{ marginBottom: 56 }}>
          <div className={`gallery${GALLERY[c.slug].length > 2 ? " three" : ""}`}>
            {GALLERY[c.slug].map((p) => <Photo key={p.src} photo={p} ratio="3:2" sizes="(min-width: 760px) 50vw, 100vw" />)}
          </div>
        </div>
      )}

      <section className="section">
        <div className="wrap cols">
          <div>
            <h2>What we rent</h2>
            <ul className="list">{c.items.map((i) => <li key={i}>{i}</li>)}</ul>
            <h2 style={{ marginTop: 40 }}>Who it is for</h2>
            <p>{c.forWho}</p>
          </div>
          <div>
            {c.sizing && (<><h2>Which one fits</h2><p>{c.sizing}</p></>)}
            {c.included && (<><h2 style={{ marginTop: c.sizing ? 40 : 0 }}>What is included</h2><ul className="list">{c.included.map((i) => <li key={i}>{i}</li>)}</ul></>)}
            {c.note && <p className="small"><strong>Please note:</strong> {c.note}</p>}
            <h2 style={{ marginTop: c.sizing || c.included || c.note ? 40 : 0 }}>Where we deliver</h2>
            <p>{COUNTIES.map((k) => `${k.name} County`).join(" and ")}. <Link href="/service-areas/">Service areas</Link></p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Other equipment</h2>
          <ul className="tiles">{related.slice(0, 6).map((x) => <Tile key={x.slug} href={`/rentals/${x.slug}/`} photoId={`cat-${x.slug}`} name={x.name} />)}</ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
