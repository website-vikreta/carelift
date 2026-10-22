import { GALLERY, IMAGES } from "@/lib/images";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta("Photo Credits", "Photographers whose work appears on this site, via Unsplash.", "/photo-credits/");

export default function Credits() {
  const seen = new Map([...Object.values(IMAGES), ...Object.values(GALLERY).flat()].map((p) => [p.credit, p.creditUrl]));
  return (
    <section className="section">
      <div className="wrap">
        <h1>Photo credits</h1>
        <p className="lead">Photographs on this site are from <a href="https://unsplash.com/?utm_source=carelift&utm_medium=referral">Unsplash</a>. Thank you to:</p>
        <ul className="list">
          {[...seen].map(([name, url]) => <li key={name}><a href={url}>{name}</a></li>)}
        </ul>
      </div>
    </section>
  );
}
