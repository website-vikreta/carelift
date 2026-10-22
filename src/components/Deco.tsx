// Decorative shapes for empty space around photos and section edges. Never placed over text.
// Inline SVG, aria-hidden, no network cost. Position each one with a `.o-*` class from globals.css.
type Kind = "blob" | "ring" | "dots" | "spark" | "squiggle" | "arc";

const SHAPES: Record<Kind, { box: string; body: React.ReactNode }> = {
  blob: {
    box: "-80 -80 160 160",
    body: <path d="M44-60C62-48 75-28 76-6s-10 43-28 58S5 76-18 71-62 47-71 24-77-26-62-45-20-75 4-74s22 2 40 14Z" fill="currentColor" />,
  },
  ring: { box: "0 0 100 100", body: <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2 7" strokeLinecap="round" /> },
  dots: {
    box: "0 0 70 70",
    body: (
      <g fill="currentColor">
        {Array.from({ length: 25 }, (_, i) => <circle key={i} cx={7 + (i % 5) * 14} cy={7 + Math.floor(i / 5) * 14} r="2.2" />)}
      </g>
    ),
  },
  spark: { box: "0 0 40 40", body: <path d="M20 0c1 12 8 19 20 20-12 1-19 8-20 20-1-12-8-19-20-20C12 19 19 12 20 0Z" fill="currentColor" /> },
  squiggle: { box: "0 0 100 24", body: <path d="M2 14q12-14 24 0t24 0 24 0 24 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /> },
  arc: { box: "0 0 100 52", body: <path d="M4 50a46 46 0 0 1 92 0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /> },
};

export function Deco({ kind, className }: { kind: Kind; className: string }) {
  const s = SHAPES[kind];
  return (
    <svg className={`orn ${className}`} viewBox={s.box} aria-hidden="true" focusable="false">
      {s.body}
    </svg>
  );
}
