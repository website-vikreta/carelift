import { SITE } from "@/lib/site";
import { ContactButtons } from "./ContactButtons";
import { Deco } from "./Deco";
import { Photo } from "./Photo";

export function CtaBand() {
  return (
    <section className="contact-strip">
      <Deco kind="blob" className="o-cta-blob" />
      <Deco kind="spark" className="o-cta-spark" />
      <div className="wrap split">
        <div>
          <p className="kicker">Talk to a real person</p>
          <h2>Call or message us. We will help you choose.</h2>
          <p>Tell us what you need and your ZIP code. We confirm availability and pricing straight away. {SITE.hours}.</p>
          <ContactButtons />
        </div>
        <div className="media">
          <Photo id="contact" ratio="4:3" />
          <Deco kind="dots" className="o-media-dots" />
        </div>
      </div>
    </section>
  );
}
