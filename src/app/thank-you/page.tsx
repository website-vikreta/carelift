import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata = { title: "Thank you", robots: { index: false } };

export default function Thanks() {
  return (
    <section className="section">
      <div className="wrap">
        <h1>Thank you</h1>
        <p className="lead">We received your request and will call you shortly. Need us sooner? <a href={SITE.phoneHref}>{SITE.phone}</a>.</p>
        <Link className="btn secondary" href="/">Back to home</Link>
      </div>
    </section>
  );
}
