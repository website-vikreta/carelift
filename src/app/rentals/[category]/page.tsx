import Link from "next/link";
import { notFound } from "next/navigation";
import { AUDIENCES, CATEGORIES, SITE } from "@/lib/site";
import { GALLERY } from "@/lib/images";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { Cities } from "@/components/Cities";
import { ContactButtons } from "@/components/ContactButtons";
import { CtaBand } from "@/components/CtaBand";
import { Deco } from "@/components/Deco";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { Tile } from "@/components/Tile";

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
  const i = CATEGORIES.indexOf(c);
  const related = [1, 2, 3].map((n) => CATEGORIES[(i + n) % CATEGORIES.length]);
  const helps = AUDIENCES.filter((a) => a.categories.includes(c.slug));
  const gallery = GALLERY[c.slug];
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Rentals", path: "/rentals/" }, { name: c.name, path: `/rentals/${c.slug}/` }])} />
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/rentals/">Rentals</Link> / {c.name}</nav>
            <h1>{c.name} rental in Greensboro and Winston-Salem</h1>
            <p className="lead">{c.intro}</p>
            <ContactButtons topic={c.name} />
          </div>
          <div className="media">
            <Deco kind="blob" className="o-hero-blob" />
            <Deco kind="ring" className="o-hero-ring" />
            <Photo id={`cat-${c.slug}`} ratio="4:3" priority sizes="(min-width: 760px) 500px, calc(100vw - 40px)" />
          </div>
        </div>
      </section>

      {gallery && (
        <div className="wrap">
          <div className="gallery">
            {gallery.map((p) => <Photo key={p.src} photo={p} ratio="3:2" sizes="(min-width: 760px) 540px, calc(100vw - 40px)" />)}
          </div>
        </div>
      )}

      <section className="section sand">
        <div className="wrap cols">
          <div>
            <h2>What we rent</h2>
            <ul className="list">{c.items.map((x) => <li key={x}>{x}</li>)}</ul>
            <h3 style={{ marginTop: 32 }}>Who it is for</h3>
            <p>{c.forWho}</p>
          </div>
          <div>
            {c.sizing && (<><h2>Which one fits</h2><p>{c.sizing}</p></>)}
            {c.included && (<><h3 style={{ marginTop: c.sizing ? 32 : 0 }}>What is included</h3><ul className="list">{c.included.map((x) => <li key={x}>{x}</li>)}</ul></>)}
            {c.note && <p className="small"><strong>Please note:</strong> {c.note}</p>}
            <p className="small" style={{ marginTop: 24 }}>Pricing depends on the model and how long you need it. <a href={SITE.phoneHref}>Call {SITE.phone}</a> for a quote.</p>
          </div>
        </div>
      </section>

      {helps.length > 0 && (
        <section className="section">
          <div className="wrap">
            <div className="sec-head"><h2>Often rented for</h2><Link className="more" href="/who-we-serve/">Who we help</Link></div>
            <ul className="scroller">
              {helps.map((a) => <Tile key={a.slug} href={`/who-we-serve/${a.slug}/`} photoId={`aud-${a.slug}`} name={a.name} desc={a.headline} ratio="4:5" sizes="(min-width: 760px) 270px, 74vw" />)}
            </ul>
          </div>
        </section>
      )}

      <section className="section sand">
        <div className="wrap">
          <div className="sec-head"><h2>Delivered across the Triad</h2><Link className="more" href="/service-areas/">Service areas</Link></div>
          <Cities />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head"><h2>You may also need</h2><Link className="more" href="/rentals/">All rentals</Link></div>
          <ul className="tiles">{related.map((x) => <Tile key={x.slug} href={`/rentals/${x.slug}/`} photoId={`cat-${x.slug}`} name={x.name} desc={x.tagline} />)}</ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
