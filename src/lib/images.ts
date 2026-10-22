// Unsplash photos (free Unsplash License), hot-linked from the Unsplash CDN with responsive sizes.
// Rule: no photo appears twice on the same page. `color` is the average colour shown while the image lazy-loads.
// Swap any entry for your own photo (e.g. a file in /public/images) when you have one.
export type SitePhoto = { src: string; alt: string; credit: string; creditUrl: string; color: string };

const photo = (id: string, alt: string, credit: string, user: string, color: string): SitePhoto => ({
  src: `https://images.unsplash.com/photo-${id}`,
  alt,
  credit,
  creditUrl: `https://unsplash.com/@${user}?utm_source=carelift&utm_medium=referral`,
  color,
});

// people at home
const COUPLE_COUCH = photo("1758691031787-90867cb6fb2c", "Smiling elderly couple relaxing on a couch at home", "Vitaly Gariev", "silverkblack", "#c0a6a6");
const COUPLE_TALK = photo("1773227059228-6ed1a6349aa9", "Elderly couple talking in a warm living room", "Age Cymru", "agecymru", "#c0a673");
const READING = photo("1758691030771-9dadc2a828d4", "Elderly man reading a book on his couch", "Vitaly Gariev", "silverkblack", "#a6a6a6");
const PHONE_CALL = photo("1756312177615-e153c9db507d", "Woman talking on her mobile phone in the kitchen", "Centre for Ageing Better", "ageing_better", "#a6a6a6");
const SMARTPHONE = photo("1758691031979-6128d4029604", "Elderly woman smiling at her smartphone", "Vitaly Gariev", "silverkblack", "#d9d9d9");
const HANDS = photo("1604881991575-dfb1003d8811", "Two people holding hands across a table", "Priscilla Du Preez", "priscilladupreez", "#c0c0c0");
const DELIVERY = photo("1758523670564-d1d6a734dc0b", "Couple receiving a delivery at their front door", "Vitaly Gariev", "silverkblack", "#f3f3f3");
// equipment and care
const NURSE = photo("1765896387387-0538bc9f997e", "Nurse smiling with an elderly patient", "Age Cymru", "agecymru", "#d9d9d9");
const BED_HOME = photo("1512678080530-7760d81faba6", "Hospital bed in a living space at home", "Martha Dominguez de Gouveia", "m_dominguez_marketing", "#d9d9d9");
const BED_ROOM = photo("1778151270902-cb0ca572f2ee", "Modern room with an adjustable hospital bed", "Irshad Pathan", "alrighthospital", "#8c8c8c");
const CHAIR = photo("1770808499456-89cebe6d3fe1", "Elderly woman with glasses sitting in a chair", "Marcos Vinicius Ferreira", "marcosnaofazisso", "#d9d9d9");
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
// local
const GREENSBORO = photo("1572111003510-f71cc42795d7", "Downtown Greensboro, North Carolina at sunrise", "Elijah Mears", "elijahjmears", "#8c8ca6");
const WINSTON = photo("1631803025020-5112aa51845d", "Bailey Power Plant in Winston-Salem, North Carolina", "Ian McIlwraith", "iankmcilwraith", "#c0c0d9");

export const IMAGES: Record<string, SitePhoto> = {
  hero: COUPLE_COUCH,
  "step-1": PHONE_CALL,
  "step-2": DELIVERY,
  "step-3": READING,
  contact: SMARTPHONE,
  about: COUPLE_TALK,
  "cat-hospital-beds": BED_HOME,
  "cat-seat-lift-chairs": CHAIR,
  "cat-wheelchairs": WHEELCHAIRS,
  "cat-mobility-scooters": SCOOTERS,
  "cat-walking-aids": ROLLATOR_SEAT,
  "cat-bathroom-safety": BATHROOM,
  "cat-patient-lifts": NURSE,
  "cat-cpm-machines": KNEE,
  "cat-respiratory": OXYGEN,
  "aud-families-and-home-care": WHEELCHAIR_HELP,
  "aud-post-surgery-recovery": KNEE_NURSE,
  "aud-hospice-and-palliative-care": HANDS,
  "aud-hospitals-and-facilities": CORRIDOR,
  "city-guilford-county-nc": GREENSBORO,
  "city-forsyth-county-nc": WINSTON,
};

// Extra photos shown in a row on category pages (never the page's own hero photo).
export const GALLERY: Record<string, SitePhoto[]> = {
  "hospital-beds": [BED_ROOM],
  "wheelchairs": [WHEELCHAIR_STUDIO],
  "walking-aids": [ROLLATOR_PATIO, ROLLATOR_WINDOW],
};
