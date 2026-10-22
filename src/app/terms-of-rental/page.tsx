import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Terms of Rental", "Terms of Rental for CareLift Medical Equipment.", "/terms-of-rental/");

export default function Page() {
  return (
    <section className="section first">
      <div className="wrap">
        <h1>Terms of Rental</h1>
        {/* TODO: replace with reviewed legal text before launch. */}
        <p>Draft pending.</p>
      </div>
    </section>
  );
}
