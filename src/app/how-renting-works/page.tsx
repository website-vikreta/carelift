import { pageMeta } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";
import { HomeCheckDoodle, PhoneDoodle, VanDoodle } from "@/components/Doodles";
import { Photo } from "@/components/Photo";

export const metadata = pageMeta("How Renting Medical Equipment Works", "Call, we deliver and set up, and we collect when you are done. Simple medical equipment rental in Greensboro and Winston-Salem.", "/how-renting-works/");

export default function How() {
  return (
    <>
      <section className="section first">
        <div className="wrap split">
          <div>
            <h1>How renting works</h1>
            <p className="lead">Renting should be the easy part. Here is what to expect.</p>
          </div>
          <Photo id="delivery" ratio="3:2" priority />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <ol className="steps">
            <li><PhoneDoodle /><h3>Call or message us</h3><p>Tell us what you need, how long, and your ZIP code. We will confirm availability and give you pricing.</p></li>
            <li><VanDoodle /><h3>Delivery and set up</h3><p>We deliver to your home or facility, set the equipment up and show you how to use it safely.</p></li>
            <li><HomeCheckDoodle /><h3>Collection</h3><p>When you no longer need it, call us and we will collect it. Every item is cleaned and sanitised before the next rental.</p></li>
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
