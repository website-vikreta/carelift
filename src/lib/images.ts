// Unsplash photo manifest. Keys: "hero", `cat-${category.slug}`, `aud-${audience.slug}`.
// Missing keys fall back to the grey placeholder. `photo` is the Unsplash photo id (the part after `photo-` in
// the images.unsplash.com URL, or the slug id from the photo page).
export type SitePhoto = { src: string; alt: string; credit: string; creditUrl: string };

export const IMAGES: Record<string, SitePhoto> = {
  // Example:
  // hero: { src: "https://images.unsplash.com/photo-XXXXXXXX", alt: "Senior woman relaxing in a lift chair at home", credit: "Photographer Name", creditUrl: "https://unsplash.com/photos/..." },
};
