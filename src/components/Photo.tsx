import { IMAGES } from "@/lib/images";

const RATIOS = { "4:3": [4, 3], "3:2": [3, 2], "16:9": [16, 9] } as const;

// Responsive Unsplash image with explicit dimensions (no layout shift). Renders nothing when no photo is configured.
export function Photo({ id, ratio = "4:3", priority = false }: { id: string; ratio?: keyof typeof RATIOS; priority?: boolean }) {
  const p = IMAGES[id];
  if (!p) return null;
  const [rw, rh] = RATIOS[ratio];
  const url = (w: number) => `${p.src}?auto=format&fit=crop&w=${w}&h=${Math.round((w * rh) / rw)}&q=70`;
  return (
    <figure className="photo" style={{ aspectRatio: `${rw} / ${rh}` }}>
      <img
        src={url(800)}
        srcSet={`${url(480)} 480w, ${url(800)} 800w, ${url(1200)} 1200w`}
        sizes="(min-width: 760px) 520px, calc(100vw - 40px)"
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
