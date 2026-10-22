// Unsplash photos (free Unsplash License), hot-linked from the Unsplash CDN with responsive sizes.
// Keys: "hero", "delivery", `cat-${category.slug}`, `aud-${audience.slug}`, and gallery keys below.
// `color` is the photo's average colour, shown while the image lazy-loads.
// Swap any entry for your own photo (e.g. a file in /public/images) when you have one.
export type SitePhoto = { src: string; alt: string; credit: string; creditUrl: string; color: string };

const photo = (id: string, alt: string, credit: string, user: string, color: string): SitePhoto => ({
  src: `https://images.unsplash.com/photo-${id}`,
  alt,
  credit,
  creditUrl: `https://unsplash.com/@${user}?utm_source=carelift&utm_medium=referral`,
  color,
});

const NURSE = photo("1765896387387-0538bc9f997e", "Nurse smiling with an elderly patient", "Age Cymru", "agecymru", "#d9d9d9");
const BED_HOME = photo("1512678080530-7760d81faba6", "Hospital bed in a living space at home", "Martha Dominguez de Gouveia", "m_dominguez_marketing", "#d9d9d9");
const BED_ROOM = photo("1778151270902-cb0ca572f2ee", "Modern room with an adjustable hospital bed", "Irshad Pathan", "alrighthospital", "#8c8c8c");
const CHAIR = photo("1762126242240-cafa01fb1351", "Woman seated in a chair by a window", "Henry Fraczek", "hfracz_721", "#262626");
const WHEELCHAIRS = photo("1773227054058-afd18b554e8f", "Elderly couple enjoying themselves in wheelchairs", "Age Cymru", "agecymru", "#d9d9c0");
const WHEELCHAIR_STUDIO = photo("1642680936843-b09109c69104", "Wheelchair on a white background", "Junseong Lee", "bearsnap", "#f3f3f3");
const WHEELCHAIR_HELP = photo("1764006145420-df3006edf060", "Young woman helping an elderly man in a wheelchair", "Jose Manuel Esp", "jmespiga", "#f3f3f3");
const SCOOTERS = photo("1778164346013-6aacf3c837a1", "People using wheelchairs and mobility scooters outside a shop", "Josh Keys", "joshkeys", "#262626");
const ROLLATOR_SEAT = photo("1774537943581-ada78b525c2f", "Elderly man resting on a rollator outside a house", "Mobio Marketing", "mobio_be", "#f3f3f3");
const ROLLATOR_PATIO = photo("1774537617358-3614ba7e8aa6", "Two people with a rollator on a patio", "Mobio Marketing", "mobio_be", "#f3f3f3");
const ROLLATOR_WINDOW = photo("1770808250138-2ce5da80b312", "Rollator and chair by a large window", "Mobio Marketing", "mobio_be", "#595959");
const BATHROOM = photo("1756312178017-8b21b910e846", "Accessible bathroom used from a wheelchair", "Centre for Ageing Better", "ageing_better", "#f3f3f3");
const KNEE = photo("1649751361457-01d3a696c7e6", "Patient having a knee examined by a clinician", "yury kirillov", "relievemassage", "#d9d9d9");
const KNEE_NURSE = photo("1746806942507-a7e93fdd6dd4", "Nurse checking a patient before knee surgery", "Judy Beth Morris", "judy_beth_morris_idaho", "#c0a673");
const OXYGEN = photo("1712232420820-50733a53b961", "Patient with an oxygen tube in a hospital bed", "engin akyurt", "enginakyurt", "#c0c0c0");
const CORRIDOR = photo("1777269749032-d8d458ae594d", "Empty hospital corridor with benches and doors", "Tasha Kostyuk", "tashakostyuk", "#c0c0c0");
const DELIVERY = photo("1758523670564-d1d6a734dc0b", "Couple receiving a delivery at their front door", "Vitaly Gariev", "silverkblack", "#f3f3f3");

export const IMAGES: Record<string, SitePhoto> = {
  hero: NURSE,
  delivery: DELIVERY,
  "cat-hospital-beds": BED_HOME,
  "cat-seat-lift-chairs": CHAIR,
  "cat-wheelchairs": WHEELCHAIRS,
  "cat-mobility-scooters": SCOOTERS,
  "cat-walking-aids": ROLLATOR_SEAT,
  "cat-bathroom-safety": BATHROOM,
  "cat-patient-lifts": WHEELCHAIR_HELP,
  "cat-cpm-machines": KNEE,
  "cat-respiratory": OXYGEN,
  "aud-families-and-home-care": WHEELCHAIR_HELP,
  "aud-post-surgery-recovery": KNEE_NURSE,
  "aud-hospice-and-palliative-care": BED_HOME,
  "aud-hospitals-and-facilities": CORRIDOR,
};

// Extra photos shown in a row on category pages.
export const GALLERY: Record<string, SitePhoto[]> = {
  "hospital-beds": [BED_ROOM],
  "wheelchairs": [WHEELCHAIR_STUDIO, WHEELCHAIR_HELP],
  "walking-aids": [ROLLATOR_PATIO, ROLLATOR_WINDOW],
  "cpm-machines": [KNEE_NURSE],
};
