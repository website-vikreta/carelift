import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDES, SITE } from "@/lib/site";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";

type Params = { slug: string };
export const dynamicParams = false;
export const generateStaticParams = () => GUIDES.map((g) => ({ slug: g.slug }));

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const g = GUIDES.find((x) => x.slug === slug);
  if (!g) return {};
  return pageMeta(g.title, g.description, `/guides/${g.slug}/`);
}

export default async function Guide({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const g = GUIDES.find((x) => x.slug === slug);
  if (!g) notFound();
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides/" }, { name: g.title, path: `/guides/${g.slug}/` }])} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: g.title, description: g.description, author: { "@type": "Organization", name: SITE.name }, publisher: { "@type": "Organization", name: SITE.name }, mainEntityOfPage: `${SITE.url}/guides/${g.slug}/` }} />
      <article className="section">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / <Link href="/guides/">Guides</Link></nav>
          <h1>{g.title}</h1>
          <p className="lead">{g.description}</p>
          {g.body.map((s) => (<div key={s.h}><h2 style={{ marginTop: 32 }}>{s.h}</h2><p>{s.p}</p></div>))}
          <p style={{ marginTop: 32 }}><em>This guide is general information, not medical advice. Follow your doctor's or therapist's guidance.</em></p>
        </div>
      </article>
      <CtaBand />
    </>
  );
}
