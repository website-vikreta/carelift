import Link from "next/link";
import { SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";
import { Deco } from "@/components/Deco";
import { Photo } from "@/components/Photo";

export const metadata = pageMeta("About CareLift Medical Equipment", "A medical equipment rental business serving homes, hospitals and care facilities in Greensboro and Winston-Salem, NC.", "/about/");

export default function About() {
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="kicker">About us</p>
            <h1>Local equipment rental, run with care</h1>
            {/* TODO: replace with the real story, team and credentials once provided. */}
            <p className="lead">{SITE.name} rents medical equipment to families, hospitals and care facilities in Guilford and Forsyth County. We keep it simple: clear answers on the phone, careful delivery and well-maintained equipment.</p>
            <p><Link className="more" href="/how-renting-works/">How renting works</Link></p>
          </div>
          <div className="media">
            <Deco kind="blob" className="o-hero-blob" />
            <Deco kind="dots" className="o-hero-dots" />
            <Photo id="about" ratio="4:3" priority sizes="(min-width: 760px) 500px, calc(100vw - 40px)" />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
