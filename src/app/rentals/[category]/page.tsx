import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, COUNTIES, SITE } from "@/lib/site";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { Photo } from "@/components/Photo";
import { ContactButtons } from "@/components/ContactButtons";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";

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
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Rentals", path: "/rentals/" }, { name: c.name, path: `/rentals/${c.slug}/` }])} />
      <section className="section">
        <div className="wrap hero-grid">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/rentals/">Rentals</Link> / {c.name}</nav>
            <h1>{c.name} rental in Greensboro &amp; Winston-Salem</h1>
            <p className="lead">{c.intro}</p>
            <ContactButtons topic={c.name} />
          </div>
          <Photo id={`cat-${c.slug}`} label={c.name} priority />
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <h2>What we rent</h2>
          <ul className="list">{c.items.map((i) => <li key={i}>{i}</li>)}</ul>
          <h2 style={{ marginTop: 32 }}>Who it is for</h2>
          <p>{c.forWho}</p>
          {c.sizing && (<><h2 style={{ marginTop: 32 }}>Which one fits?</h2><p>{c.sizing}</p></>)}
          {c.included && (<><h2 style={{ marginTop: 32 }}>What is included</h2><ul className="list">{c.included.map((i) => <li key={i}>{i}</li>)}</ul></>)}
          {c.note && <p><strong>Please note:</strong> {c.note}</p>}
          <h2 style={{ marginTop: 32 }}>Delivery in Guilford and Forsyth County</h2>
          <p>We deliver, set up and collect in:</p>
          <ul className="pills">
            {COUNTIES.map((k) => <li key={k.slug}><Link href={`/service-areas/${k.slug}/`}>{k.name} County</Link></li>)}
          </ul>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2>Other rentals</h2>
          <ul className="pills">
            {CATEGORIES.filter((x) => x.slug !== c.slug).map((x) => <li key={x.slug}><Link href={`/rentals/${x.slug}/`}>{x.name}</Link></li>)}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
