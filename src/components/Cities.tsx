import { COUNTIES } from "@/lib/site";
import { Tile } from "./Tile";

// Local delivery areas as photo tiles, linking to each county page.
export function Cities({ exclude }: { exclude?: string }) {
  return (
    <ul className="cities">
      {COUNTIES.filter((c) => c.slug !== exclude).map((c) => (
        <Tile key={c.slug} href={`/service-areas/${c.slug}/`} photoId={`city-${c.slug}`} name={`${c.name} County`} desc={c.cities} ratio="16:9" sizes="(min-width: 760px) 540px, calc(100vw - 40px)" />
      ))}
    </ul>
  );
}
