import Link from "next/link";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Photo } from "@/components/Photo";

export const metadata = pageMeta(
  "About CareLift: Local Lift Chair Rentals",
  "CareLift Medical Equipment is a local lift chair rental service based in Rahway, NJ, delivering to homes in New York City and New Jersey.",
  "/about/",
);

// TODO: add a "Meet the owner" section once the client supplies a name, photo and short story.
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
          <Photo id="about" ratio="4:5" priority sizes="(min-width: 760px) 500px, calc(100vw - 40px)" />
        </div>
      </section>

      <CtaBand title="Talk to us about a lift chair" />
    </>
  );
}
