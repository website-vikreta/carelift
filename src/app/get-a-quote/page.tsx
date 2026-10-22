import { SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { ContactButtons } from "@/components/ContactButtons";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata = pageMeta("Request a Medical Equipment Rental Quote", "Tell us what you need and we will call you back with pricing and delivery details.", "/get-a-quote/");

export default function Quote() {
  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 640 }}>
        <h1>Request a quote</h1>
        <p className="lead">Prefer to talk now? The fastest way to reach us is to call or message us on WhatsApp.</p>
        <ContactButtons showForm={false} />
        <h2 style={{ marginTop: 40 }}>Or request a callback</h2>
        <p>Share a few details and we will call you back.</p>
        <QuoteForm />
      </div>
    </section>
  );
}
