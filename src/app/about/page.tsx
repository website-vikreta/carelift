import Link from "next/link";
import { OWNER } from "@/lib/site";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";

export const metadata = pageMeta(
  "About CareLift: Local Lift Chair Rentals",
  "CareLift Medical Equipment is a local lift chair rental service based in Rahway, NJ, delivering to homes in New York City and New Jersey.",
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
            <p className="lead">A local lift chair rental service based in Rahway, NJ.</p>
            <p>We rent one thing, power lift chairs, to private customers in New York City and New Jersey. We deliver, set up and pick up, so you never have to buy a chair for a short-term need.</p>
            <p>Our aim is simple: make recovery and getting around at home easier and safer.</p>
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
