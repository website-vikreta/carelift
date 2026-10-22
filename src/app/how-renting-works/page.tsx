import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { ContactButtons } from "@/components/ContactButtons";
import { CtaBand } from "@/components/CtaBand";
import { Deco } from "@/components/Deco";
import { Steps } from "@/components/Steps";

export const metadata = pageMeta("How Renting Medical Equipment Works", "Call, we deliver and set up, and we collect when you are done. Simple medical equipment rental in Greensboro and Winston-Salem.", "/how-renting-works/");

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
            <p>Pricing depends on the item and how long you need it, so we quote on the phone. There is no long-term commitment.</p>
          </div>
          <div>
            <p>Not sure what to rent? Start with <Link href="/rentals/">our rentals</Link>, see <Link href="/who-we-serve/">who we help</Link>, or read <Link href="/faq/">common questions</Link>.</p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
