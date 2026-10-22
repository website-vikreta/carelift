// Stand-in for stock photography. Swap for <img>/next/image once images are added to /public/images.
export function Placeholder({ label, wide = false }: { label: string; wide?: boolean }) {
  return (
    <div className={`ph${wide ? " wide" : ""}`} role="img" aria-label={label}>
      <div>
        {label}
        <small>Image placeholder</small>
      </div>
    </div>
  );
}
