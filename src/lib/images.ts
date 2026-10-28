// Unsplash photos (free Unsplash License), hot-linked from the Unsplash CDN with responsive sizes.
// Rule: no photo appears twice on the same page. `color` is the average colour shown while the image lazy-loads.
// These are recliner product photos standing in for CareLift's own chairs; replace with photos of the real
// rental chairs in /public/images when available.
export type SitePhoto = { src: string; alt: string; credit: string; creditUrl: string; color: string };

const photo = (id: string, alt: string, credit: string, user: string, color: string): SitePhoto => ({
  src: `https://images.unsplash.com/photo-${id}`,
  alt,
  credit,
  creditUrl: `https://unsplash.com/@${user}?utm_source=carelift&utm_medium=referral`,
  color,
});

const ROOM = photo("1757969687802-82493a29047a", "Beige recliner chair beside small side tables in a bright room", "Costa Live", "vendedorescostalive", "#ececea");
const FRONT = photo("1759722666941-a90d5a15b1d7", "Front view of a beige upholstered recliner chair", "Costa Live", "vendedorescostalive", "#ececea");
const ANGLE = photo("1759722666961-8068c5ad61ab", "Beige recliner chair seen from the side, next to a small table", "Costa Live", "vendedorescostalive", "#ececea");
const CLOSE = photo("1759722666919-14db39a6f347", "Close view of a padded recliner chair with a side table", "Costa Live", "vendedorescostalive", "#ececea");

export const IMAGES: Record<string, SitePhoto> = {
  hero: ROOM,
  chair: FRONT,
  "rental-page": ANGLE,
  about: CLOSE,
};
