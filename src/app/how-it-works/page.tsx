import Link from "next/link";
import { SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { ContactButtons } from "@/components/ContactButtons";
import { CtaBand } from "@/components/CtaBand";
import { Deco } from "@/components/Deco";
import { Steps } from "@/components/Steps";

export const metadata = pageMeta("How Renting a Lift Chair Works", "Call or message us, we deliver and set up your lift chair, and we collect it when you are done. New York City and New Jersey.", "/how-it-works/");

export default function How() {
  return (
    <>
      <section className="section first">
        <Deco kind="dots" className="o-sec-dots" />
        <div className="wrap">
          <h1>How renting works</h1>
          <p className="lead">Three steps, one phone call. Here is what to expect.</p>
          <ContactButtons />
        </div>
      </section>
      <section className="section deep">
        <Deco kind="ring" className="o-deep-ring" />
        <Deco kind="arc" className="o-deep-arc" />
        <div className="wrap"><Steps /></div>
      </section>
      <section className="section sand">
        <div className="wrap cols">
          <div>
            <h2>Good to know</h2>
            <p>Pricing depends on the chair and how long you need it, so we quote by phone. We only do private rentals, which are not billed to insurance or Medicare.</p>
          </div>
          <div>
            <p>We use a liability form for rentals. <a href={SITE.liabilityFormHref} download>Download it here</a>, or find it in the footer of any page.</p>
            <p>Questions first? See <Link href="/faq/">common questions</Link> or <Link href="/service-areas/">where we deliver</Link>.</p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
