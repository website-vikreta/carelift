import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section first">
      <div className="wrap">
        <h1>Page not found</h1>
        <p>Try our <Link href="/lift-chair-rental/">lift chair rentals</Link> or <Link href="/contact/">contact us</Link>.</p>
      </div>
    </section>
  );
}
