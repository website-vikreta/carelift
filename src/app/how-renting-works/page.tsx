import { pageMeta } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";

export const metadata = pageMeta("How Renting Medical Equipment Works", "Call, we deliver and set up, and we collect when you are done. Simple medical equipment rental across New Jersey.", "/how-renting-works/");

export default function How() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <h1>How renting works</h1>
          <p className="lead">Renting should be the easy part. Here is what to expect.</p>
          <ol className="steps" style={{ marginTop: 28 }}>
            <li><h3>Call or request a quote</h3><p>Tell us what you need, how long, and your ZIP code. We will confirm availability and give you pricing.</p></li>
            <li><h3>Delivery and set up</h3><p>We deliver to your home or facility, set the equipment up and show you how to use it safely.</p></li>
            <li><h3>Collection</h3><p>When you no longer need it, call us and we will collect it. Every item is cleaned and sanitised before the next rental.</p></li>
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
