import { AREAS } from "@/lib/site";
import { Tile } from "./Tile";

// Delivery areas as photo tiles, linking to each area page.
export function Areas({ exclude }: { exclude?: string }) {
  return (
    <ul className="cities">
      {AREAS.filter((a) => a.slug !== exclude).map((a) => (
        <Tile key={a.slug} href={`/service-areas/${a.slug}/`} photoId={`area-${a.slug}`} name={a.name} desc={a.places} ratio="16:9" sizes="(min-width: 760px) 540px, calc(100vw - 40px)" />
      ))}
    </ul>
  );
}
