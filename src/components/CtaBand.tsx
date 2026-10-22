import { SITE } from "@/lib/site";
import { ContactButtons } from "./ContactButtons";

export function CtaBand() {
  return (
    <section className="contact-strip">
      <div className="wrap">
        <h2>Call or message us</h2>
        <p>Tell us what you need and your ZIP code and we will confirm availability and pricing. {SITE.hours}.</p>
        <ContactButtons />
      </div>
    </section>
  );
}
