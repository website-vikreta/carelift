// Unsplash photo manifest (free Unsplash License). Keys: "hero", `cat-${category.slug}`, `aud-${audience.slug}`.
// Missing keys fall back to the grey placeholder. Currently no photos for: walking-aids, bathroom-safety,
// patient-lifts, respiratory. Some are stand-ins (e.g. seat-lift-chairs); replace with real inventory photos when available.
export type SitePhoto = { src: string; alt: string; credit: string; creditUrl: string };

export const IMAGES: Record<string, SitePhoto> = {
  "hero": { src: "https://images.unsplash.com/photo-1765600326878-6ba99ccc590b", alt: "Woman reading by a bright window at home", credit: "Yaroslava Holiachenko", creditUrl: "https://unsplash.com/@yara_gr?utm_source=carelift&utm_medium=referral" },
  "cat-hospital-beds": { src: "https://images.unsplash.com/photo-1512678080530-7760d81faba6", alt: "Hospital bed in a living space at home", credit: "Martha Dominguez de Gouveia", creditUrl: "https://unsplash.com/@m_dominguez_marketing?utm_source=carelift&utm_medium=referral" },
  "cat-seat-lift-chairs": { src: "https://images.unsplash.com/photo-1762126242240-cafa01fb1351", alt: "Woman seated in a chair by a window", credit: "Henry Fraczek", creditUrl: "https://unsplash.com/@hfracz_721?utm_source=carelift&utm_medium=referral" },
  "cat-wheelchairs": { src: "https://images.unsplash.com/photo-1642680936843-b09109c69104", alt: "Wheelchair on a white background", credit: "Junseong Lee", creditUrl: "https://unsplash.com/@bearsnap?utm_source=carelift&utm_medium=referral" },
  "cat-mobility-scooters": { src: "https://images.unsplash.com/photo-1778164346013-6aacf3c837a1", alt: "People using wheelchairs and mobility scooters outside a shop", credit: "Josh Keys", creditUrl: "https://unsplash.com/@joshkeys?utm_source=carelift&utm_medium=referral" },
  "cat-cpm-machines": { src: "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6", alt: "Patient having a knee examined by a clinician", credit: "yury kirillov", creditUrl: "https://unsplash.com/@relievemassage?utm_source=carelift&utm_medium=referral" },
  "aud-families-and-home-care": { src: "https://images.unsplash.com/photo-1764006145420-df3006edf060", alt: "Young woman helping an elderly man in a wheelchair", credit: "Jose Manuel Esp", creditUrl: "https://unsplash.com/@jmespiga?utm_source=carelift&utm_medium=referral" },
  "aud-post-surgery-recovery": { src: "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6", alt: "Patient having a knee examined by a clinician", credit: "yury kirillov", creditUrl: "https://unsplash.com/@relievemassage?utm_source=carelift&utm_medium=referral" },
  "aud-hospice-and-palliative-care": { src: "https://images.unsplash.com/photo-1512678080530-7760d81faba6", alt: "Hospital bed in a living space at home", credit: "Martha Dominguez de Gouveia", creditUrl: "https://unsplash.com/@m_dominguez_marketing?utm_source=carelift&utm_medium=referral" },
  "aud-hospitals-and-facilities": { src: "https://images.unsplash.com/photo-1777269749032-d8d458ae594d", alt: "Empty hospital corridor with benches and doors", credit: "Tasha Kostyuk", creditUrl: "https://unsplash.com/@tashakostyuk?utm_source=carelift&utm_medium=referral" },
};
