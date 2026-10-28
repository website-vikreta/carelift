import { AREAS } from "@/lib/site";
import { Photo } from "./Photo";

// Delivery areas as photo cards (no separate pages: the site is just Home, Lift chairs and Contact).
export function Areas() {
  return (
    <ul className="cities">
      {AREAS.map((a) => (
        <li key={a.slug}>
          <div className="tile">
            <Photo id={`area-${a.slug}`} ratio="16:9" sizes="(min-width: 760px) 540px, calc(100vw - 40px)" />
            <span className="name">{a.name}</span>
            <span className="desc">{a.places}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
