import Link from "next/link";
import { OWNER } from "@/lib/site";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";

export const metadata = pageMeta(
  "About CareLift: Local Lift Chair Rentals",
  "Reliable lift chair rentals for comfort, safety and independence at home. Delivering across New Jersey and surrounding areas, including New York City.",
  "/about/",
);

export default function About() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "About", path: "/about/" }])} />
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link> / About</nav>
            <h1>About CareLift</h1>
            <p className="lead">Reliable lift chair rentals for comfort, safety and independence at home.</p>
            <p>Whether it&rsquo;s recovery, daily assistance or temporary support for a loved one, we keep renting simple: quality chairs, friendly service and dependable options, delivered, set up and picked up, so families have peace of mind.</p>
          </div>
          <Photo id="about" ratio="1:1" priority sizes="(min-width: 760px) 500px, calc(100vw - 40px)" />
        </div>
      </section>

      <section className="section sand">
        <div className="wrap owner">
          <img src={OWNER.photo} alt={`${OWNER.name}, ${OWNER.role.toLowerCase()} of CareLift`} width={640} height={640} loading="lazy" decoding="async" />
          <div>
            <h2>Meet the owner</h2>
            <p className="owner-name">{OWNER.name}, {OWNER.role}</p>
            <p>{OWNER.story}</p>
          </div>
        </div>
      </section>

      <CtaBand title="Talk to us about a lift chair" />
    </>
  );
}
