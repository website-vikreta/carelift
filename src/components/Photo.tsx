import { IMAGES } from "@/lib/images";
import { Placeholder } from "./Placeholder";

// Renders an Unsplash photo when one is configured for `id`, otherwise the placeholder.
export function Photo({ id, label, wide = false, priority = false }: { id: string; label: string; wide?: boolean; priority?: boolean }) {
  const p = IMAGES[id];
  if (!p) return <Placeholder label={label} wide={wide} />;
  const url = (w: number) => `${p.src}${p.src.includes("?") ? "&" : "?"}auto=format&fit=crop&w=${w}&q=75`;
  return (
    <div className={`ph photo${wide ? " wide" : ""}`}>
      <img
        src={url(800)}
        srcSet={`${url(480)} 480w, ${url(800)} 800w, ${url(1200)} 1200w`}
        sizes="(min-width: 768px) 50vw, 100vw"
        alt={p.alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
      />
    </div>
  );
}
