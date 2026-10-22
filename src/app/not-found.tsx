import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <h1>Page not found</h1>
        <p>Try our <Link href="/rentals/">rentals</Link> or <Link href="/contact/">contact us</Link>.</p>
      </div>
    </section>
  );
}
