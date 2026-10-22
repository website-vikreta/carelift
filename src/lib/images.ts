// Unsplash photos (free Unsplash License). Keys: "hero", `cat-${category.slug}`, `aud-${audience.slug}`.
// Pages render no image when a key is missing (no placeholder boxes), so the layout works without them.
// Add real photos of your own stock under public/images and point `src` at them when available.
export type SitePhoto = { src: string; alt: string; credit: string; creditUrl: string };

const u = (user: string) => `https://unsplash.com/@${user}?utm_source=carelift&utm_medium=referral`;
const img = (id: string) => `https://images.unsplash.com/photo-${id}`;

export const IMAGES: Record<string, SitePhoto> = {
  hero: { src: img("1765600326878-6ba99ccc590b"), alt: "Woman reading by a bright window at home", credit: "Yaroslava Holiachenko", creditUrl: u("yara_gr") },
  "cat-hospital-beds": { src: img("1512678080530-7760d81faba6"), alt: "Hospital bed in a living space at home", credit: "Martha Dominguez de Gouveia", creditUrl: u("m_dominguez_marketing") },
  "cat-seat-lift-chairs": { src: img("1762126242240-cafa01fb1351"), alt: "Woman seated in a chair by a window", credit: "Henry Fraczek", creditUrl: u("hfracz_721") },
  "cat-wheelchairs": { src: img("1642680936843-b09109c69104"), alt: "Wheelchair on a white background", credit: "Junseong Lee", creditUrl: u("bearsnap") },
  "cat-mobility-scooters": { src: img("1778164346013-6aacf3c837a1"), alt: "People using wheelchairs and mobility scooters outside a shop", credit: "Josh Keys", creditUrl: u("joshkeys") },
  "cat-cpm-machines": { src: img("1649751361457-01d3a696c7e6"), alt: "Patient having a knee examined by a clinician", credit: "yury kirillov", creditUrl: u("relievemassage") },
  "aud-families-and-home-care": { src: img("1764006145420-df3006edf060"), alt: "Young woman helping an elderly man in a wheelchair", credit: "Jose Manuel Esp", creditUrl: u("jmespiga") },
  "aud-post-surgery-recovery": { src: img("1649751361457-01d3a696c7e6"), alt: "Patient having a knee examined by a clinician", credit: "yury kirillov", creditUrl: u("relievemassage") },
  "aud-hospice-and-palliative-care": { src: img("1512678080530-7760d81faba6"), alt: "Hospital bed in a living space at home", credit: "Martha Dominguez de Gouveia", creditUrl: u("m_dominguez_marketing") },
  "aud-hospitals-and-facilities": { src: img("1777269749032-d8d458ae594d"), alt: "Empty hospital corridor with benches and doors", credit: "Tasha Kostyuk", creditUrl: u("tashakostyuk") },
};
