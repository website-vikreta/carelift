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
          <h2>Call or message us. We will help you choose a chair.</h2>
          <p>Tell us how long you need it and where it is going. We confirm availability and pricing. {SITE.hours}.</p>
          <ContactButtons />
        </div>
        <div className="media">
          <Photo id="cta" ratio="4:3" />
          <Deco kind="dots" className="o-media-dots" />
        </div>
      </div>
    </section>
  );
}
