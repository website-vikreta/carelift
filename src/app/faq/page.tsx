import { FAQS } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";

export const metadata = pageMeta("Medical Equipment Rental FAQ", "Answers to common questions about renting medical equipment in North Carolina.", "/faq/");

export default function Faq() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <h1>Frequently asked questions</h1>
          {FAQS.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
        </div>
      </section>
      <CtaBand />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
    </>
  );
}
