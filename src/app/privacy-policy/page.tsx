import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Privacy Policy", "Privacy Policy for CareLift Medical Equipment.", "/privacy-policy/");

export default function Page() {
  return (
    <section className="section">
      <div className="wrap">
        <h1>Privacy Policy</h1>
        {/* TODO: replace with reviewed legal text before launch. */}
        <p>Draft pending.</p>
      </div>
    </section>
  );
}
