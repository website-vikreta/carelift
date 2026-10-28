import { IMAGES, type SitePhoto } from "@/lib/images";

const RATIOS = { "4:3": [4, 3], "3:2": [3, 2], "16:9": [16, 9], "1:1": [1, 1], "4:5": [4, 5] } as const;
export type Ratio = keyof typeof RATIOS;

const DEFAULT_SIZES = "(min-width: 760px) 520px, calc(100vw - 40px)";

// Responsive, lazy-loaded image with explicit dimensions (no layout shift) and a colour placeholder.
// The frame sets the aspect ratio; the image is cropped to it with object-fit. Renders nothing when no photo is configured.
export function Photo({
  id,
  photo,
  ratio = "4:3",
  priority = false,
  sizes = DEFAULT_SIZES,
}: {
  id?: string;
  photo?: SitePhoto;
  ratio?: Ratio;
  priority?: boolean;
  sizes?: string;
}) {
  const p = photo ?? (id ? IMAGES[id] : undefined);
  if (!p) return null;
  const [rw, rh] = RATIOS[ratio];
  const url = (w: number) => `${p.file}-${w}.webp`;
  const mid = p.widths.find((w) => w >= 640) ?? p.widths[p.widths.length - 1];
  return (
    <figure className="photo" style={{ aspectRatio: `${rw} / ${rh}`, backgroundColor: p.color }}>
      <img
        src={url(mid)}
        srcSet={p.widths.map((w) => `${url(w)} ${w}w`).join(", ")}
        sizes={sizes}
        width={800}
        height={Math.round((800 * rh) / rw)}
        alt={p.alt}
        style={p.position ? { objectPosition: p.position } : undefined}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </figure>
  );
}
