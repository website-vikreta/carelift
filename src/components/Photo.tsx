import { IMAGES, type SitePhoto } from "@/lib/images";

const RATIOS = { "4:3": [4, 3], "3:2": [3, 2], "16:9": [16, 9], "1:1": [1, 1] } as const;
export type Ratio = keyof typeof RATIOS;

const DEFAULT_SIZES = "(min-width: 760px) 520px, calc(100vw - 40px)";

// Responsive, lazy-loaded Unsplash image with explicit dimensions (no layout shift) and a colour placeholder.
// Pass either `id` (key in IMAGES) or a `photo`. Renders nothing when no photo is configured.
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
  const url = (w: number) => `${p.src}?auto=format&fit=crop&w=${w}&h=${Math.round((w * rh) / rw)}&q=70`;
  return (
    <figure className="photo" style={{ aspectRatio: `${rw} / ${rh}`, backgroundColor: p.color }}>
      <img
        src={url(800)}
        srcSet={`${url(400)} 400w, ${url(640)} 640w, ${url(960)} 960w, ${url(1280)} 1280w`}
        sizes={sizes}
        width={800}
        height={Math.round((800 * rh) / rw)}
        alt={p.alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </figure>
  );
}
