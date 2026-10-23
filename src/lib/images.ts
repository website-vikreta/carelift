// Unsplash photos (free Unsplash License), hot-linked from the Unsplash CDN with responsive sizes.
// Rule: no photo appears twice on the same page. `color` is the average colour shown while the image lazy-loads.
// Unsplash has no real lift-chair photography, so chair photos are comfortable-armchair stand-ins; replace with
// photos of your own chairs in /public/images when available.
export type SitePhoto = { src: string; alt: string; credit: string; creditUrl: string; color: string };

const photo = (id: string, alt: string, credit: string, user: string, color: string): SitePhoto => ({
  src: `https://images.unsplash.com/photo-${id}`,
  alt,
  credit,
  creditUrl: `https://unsplash.com/@${user}?utm_source=carelift&utm_medium=referral`,
  color,
});

const COUPLE_COUCH = photo("1758691031787-90867cb6fb2c", "Smiling elderly couple relaxing on a couch at home", "Vitaly Gariev", "silverkblack", "#c0a6a6");
const WOMAN_CHAIR = photo("1770808499456-89cebe6d3fe1", "Elderly woman with glasses sitting comfortably in a chair", "Marcos Vinicius Ferreira", "marcosnaofazisso", "#d9d9d9");
const ARMCHAIR_LIVING = photo("1714872245785-674ae3038d21", "Comfortable armchair in a bright living room", "eskoala", "eskoala", "#d9d9d9");
const ARMCHAIR_GREEN = photo("1606744824163-985d376605aa", "Grey armchair with ottoman in a cosy room", "Jason Wang", "coohom", "#262626");
const PHONE_CALL = photo("1756312177615-e153c9db507d", "Woman talking on her mobile phone in the kitchen", "Centre for Ageing Better", "ageing_better", "#a6a6a6");
const DELIVERY = photo("1758523670564-d1d6a734dc0b", "Couple receiving a delivery at their front door", "Vitaly Gariev", "silverkblack", "#f3f3f3");
const READING = photo("1758691030771-9dadc2a828d4", "Elderly man reading a book on his couch", "Vitaly Gariev", "silverkblack", "#a6a6a6");
const SMARTPHONE = photo("1758691031979-6128d4029604", "Elderly woman smiling at her smartphone", "Vitaly Gariev", "silverkblack", "#d9d9d9");
const NYC = photo("1496588152823-86ff7695e68f", "Brooklyn Bridge with Manhattan in the distance", "Luca Bravo", "lucabravo", "#262626");
const NJ = photo("1606787110443-7d8ebf733ac9", "Sunset view of the New York skyline from Hoboken, New Jersey", "Matthew Wu", "mlwu", "#a6a6c0");

export const IMAGES: Record<string, SitePhoto> = {
  hero: COUPLE_COUCH,
  chair: ARMCHAIR_LIVING,
  "chair-page": WOMAN_CHAIR,
  "step-1": PHONE_CALL,
  "step-2": DELIVERY,
  "step-3": READING,
  contact: SMARTPHONE,
  cta: SMARTPHONE,
  "area-new-york-city": NYC,
  "area-new-jersey": NJ,
};

// Extra photos in a row on the lift chair page (never the page's own hero photo).
export const GALLERY: SitePhoto[] = [ARMCHAIR_LIVING, ARMCHAIR_GREEN];
