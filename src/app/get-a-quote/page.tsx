import { SITE } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { QuoteForm } from "@/components/QuoteForm";

export const metadata = pageMeta("Request a Medical Equipment Rental Quote", "Tell us what you need and we will call you back with pricing and delivery details.", "/get-a-quote/");

export default function Quote() {
  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 640 }}>
        <h1>Request a quote</h1>
        <p className="lead">Share a few details and we will call you back. Prefer to talk now? <a href={SITE.phoneHref}>Call {SITE.phone}</a>.</p>
        <QuoteForm />
      </div>
    </section>
  );
}
