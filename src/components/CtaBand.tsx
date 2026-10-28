import { SITE } from "@/lib/site";
import { ContactButtons } from "./ContactButtons";

export function CtaBand({ title = "Ready to rent a lift chair?" }: { title?: string }) {
  return (
    <section className="contact-strip">
      <div className="wrap">
        <h2>{title}</h2>
        <p>{SITE.hours}</p>
        <ContactButtons />
      </div>
    </section>
  );
}
