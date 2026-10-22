import { CATEGORIES } from "@/lib/site";
import { pageMeta } from "@/lib/seo";
import { CtaBand } from "@/components/CtaBand";
import { Deco } from "@/components/Deco";
import { Tile } from "@/components/Tile";

export const metadata = pageMeta("Medical Equipment Rentals in Greensboro & Winston-Salem, NC", "Hospital beds, wheelchairs, lift chairs, scooters and more to rent in Greensboro, Winston-Salem and nearby. Call for pricing.", "/rentals/");

export default function Rentals() {
  return (
    <>
      <section className="section first">
        <Deco kind="dots" className="o-sec-dots" />
        <div className="wrap">
          <h1>Equipment rentals</h1>
          <p className="lead">Choose a category. Call or message us for pricing and availability.</p>
          <ul className="tiles" style={{ marginTop: 32 }}>
            {CATEGORIES.map((c) => <Tile key={c.slug} href={`/rentals/${c.slug}/`} photoId={`cat-${c.slug}`} name={c.name} desc={c.tagline} />)}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
