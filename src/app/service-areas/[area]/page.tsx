import Link from "next/link";
import { notFound } from "next/navigation";
import { AREAS, PRODUCT, SITE } from "@/lib/site";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { Areas } from "@/components/Areas";
import { ContactButtons } from "@/components/ContactButtons";
import { CtaBand } from "@/components/CtaBand";
import { Deco } from "@/components/Deco";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";

type Params = { area: string };
export const dynamicParams = false;
export const generateStaticParams = () => AREAS.map((a) => ({ area: a.slug }));

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { area } = await params;
  const a = AREAS.find((x) => x.slug === area);
  if (!a) return {};
  return pageMeta(`Lift Chair Rental in ${a.name}`, `Rent a power lift chair in ${a.name}. ${a.blurb} Delivered, set up and collected. Call for pricing.`, `/service-areas/${a.slug}/`);
}

export default async function AreaPage({ params }: { params: Promise<Params> }) {
  const { area } = await params;
  const a = AREAS.find((x) => x.slug === area);
  if (!a) notFound();
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Service areas", path: "/service-areas/" }, { name: a.name, path: `/service-areas/${a.slug}/` }])} />
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/service-areas/">Service areas</Link> / {a.name}</nav>
            <h1>Lift chair rental in {a.name}</h1>
            <p className="lead">{a.blurb} {SITE.name} delivers a power lift chair to your home, sets it up and collects it when your rental ends. Covering {a.places}.</p>
            {/* TODO: add unique local copy per area (delivery times, neighbourhoods served). Avoid cloning text between areas. */}
            <ContactButtons />
          </div>
          <div className="media">
            <Deco kind="blob" className="o-hero-blob" />
            <Deco kind="spark" className="o-hero-spark" />
            <Photo id={`area-${a.slug}`} ratio="4:3" priority sizes="(min-width: 760px) 500px, calc(100vw - 40px)" />
          </div>
        </div>
      </section>
      <section className="section sand">
        <div className="wrap cols">
          <div>
            <h2>About our lift chairs</h2>
            <p>{PRODUCT.intro}</p>
            <p><Link className="more" href={`/${PRODUCT.slug}/`}>Lift chair rental details</Link></p>
          </div>
          <div>
            <h2>Also delivering to</h2>
            <Areas exclude={a.slug} />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
