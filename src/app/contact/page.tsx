import { SITE } from "@/lib/site";
import { ContactForm } from "@/components/ContactForm";
import { Deco } from "@/components/Deco";
import { Photo } from "@/components/Photo";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Contact CareLift Medical Equipment", "Call or send a message to rent a lift chair in New York City or New Jersey.", "/contact/");

export default function Contact() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1>Contact us</h1>
          <p className="lead">The fastest way is to call. Or send a message and we will call you back.</p>
          <div className="btn-row"><a className="btn" href={SITE.phoneHref}>Call {SITE.phone}</a></div>
          <p className="small hero-note">{SITE.hours}</p>
          <h2 style={{ marginTop: 40 }}>Send a message</h2>
          <ContactForm />
        </div>
        <div className="media">
          <Deco kind="blob" className="o-hero-blob" />
          <Deco kind="ring" className="o-hero-ring" />
          <Photo id="contact" ratio="4:5" priority sizes="(min-width: 760px) 500px, calc(100vw - 40px)" />
        </div>
      </div>
    </section>
  );
}
