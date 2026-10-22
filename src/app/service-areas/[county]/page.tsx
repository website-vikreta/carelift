import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, COUNTIES, SITE } from "@/lib/site";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { ContactButtons } from "@/components/ContactButtons";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";
import { Tile } from "@/components/Tile";

type Params = { county: string };
export const dynamicParams = false;
export const generateStaticParams = () => COUNTIES.map((c) => ({ county: c.slug }));

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { county } = await params;
  const c = COUNTIES.find((x) => x.slug === county);
  if (!c) return {};
  return pageMeta(`Medical Equipment Rental in ${c.name} County, NC`, `Rent hospital beds, wheelchairs, lift chairs and more in ${c.name} County, North Carolina (${c.cities}). Delivered and set up. Call for pricing.`, `/service-areas/${c.slug}/`);
}

export default async function County({ params }: { params: Promise<Params> }) {
  const { county } = await params;
  const c = COUNTIES.find((x) => x.slug === county);
  if (!c) notFound();
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Service areas", path: "/service-areas/" }, { name: `${c.name} County`, path: `/service-areas/${c.slug}/` }])} />
      <section className="section first">
        <div className="wrap split">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/service-areas/">Service areas</Link> / {c.name} County</nav>
            <h1>Medical equipment rental in {c.name} County, NC</h1>
            <p className="lead">{SITE.name} delivers, sets up and collects rental equipment for homes, hospitals and care facilities in {c.name} County, including {c.cities}.</p>
            {/* TODO: add unique local copy per county (delivery times, nearby hospitals/rehab centres actually served). Avoid cloning text. */}
            <ContactButtons topic={`equipment in ${c.name} County`} />
          </div>
          <Photo id="delivery" ratio="3:2" priority />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2>Available to rent in {c.name} County</h2>
          <ul className="tiles">
            {CATEGORIES.map((x) => <Tile key={x.slug} href={`/rentals/${x.slug}/`} photoId={`cat-${x.slug}`} name={x.name} />)}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
