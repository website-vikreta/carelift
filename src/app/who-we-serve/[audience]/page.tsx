import Link from "next/link";
import { notFound } from "next/navigation";
import { AUDIENCES, CATEGORIES, SITE } from "@/lib/site";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { ContactButtons } from "@/components/ContactButtons";
import { CtaBand } from "@/components/CtaBand";
import { Deco } from "@/components/Deco";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { Steps } from "@/components/Steps";
import { Tile } from "@/components/Tile";

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
  const others = AUDIENCES.filter((x) => x.slug !== a.slug);
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Who we serve", path: "/who-we-serve/" }, { name: a.name, path: `/who-we-serve/${a.slug}/` }])} />
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/who-we-serve/">Who we serve</Link> / {a.name}</nav>
            <p className="kicker">{a.name}</p>
            <h1>{a.headline}</h1>
            <p className="lead">{a.intro}</p>
            <ContactButtons topic={a.name} />
          </div>
          <div className="media">
            <Deco kind="blob" className="o-hero-blob" />
            <Deco kind="dots" className="o-hero-dots" />
            <Photo id={`aud-${a.slug}`} ratio="4:3" priority sizes="(min-width: 760px) 500px, calc(100vw - 40px)" />
          </div>
        </div>
      </section>

      <section className="section sand">
        <div className="wrap cols">
          <h2>What to expect</h2>
          <ul className="list">{a.points.map((p) => <li key={p}>{p}</li>)}</ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head"><h2>Equipment people rent for this</h2><Link className="more" href="/rentals/">All rentals</Link></div>
          <ul className="tiles">{cats.map((c) => <Tile key={c.slug} href={`/rentals/${c.slug}/`} photoId={`cat-${c.slug}`} name={c.name} desc={c.tagline} />)}</ul>
        </div>
      </section>

      <section className="section deep">
        <Deco kind="ring" className="o-deep-ring" />
        <div className="wrap">
          <h2>How it works</h2>
          <Steps />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head"><h2>We also help</h2></div>
          <ul className="tiles">{others.map((x) => <Tile key={x.slug} href={`/who-we-serve/${x.slug}/`} photoId={`aud-${x.slug}`} name={x.name} desc={x.headline} />)}</ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
