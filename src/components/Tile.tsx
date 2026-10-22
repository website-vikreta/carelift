import Link from "next/link";
import { Photo } from "./Photo";

// Image-led link tile: lazy photo above, name and one line below.
export function Tile({ href, photoId, name, desc }: { href: string; photoId: string; name: string; desc?: string }) {
  return (
    <li>
      <Link href={href} className="tile">
        <Photo id={photoId} ratio="4:3" sizes="(min-width: 760px) 360px, 50vw" />
        <span className="name">{name}</span>
        {desc && <span className="desc">{desc}</span>}
      </Link>
    </li>
  );
}
