export const SITE = {
  name: "CareLift Medical Equipment",
  short: "CareLift",
  phone: "+1 (336) 653-4589",
  phoneHref: "tel:+13366534589",
  whatsappNumber: "13366534589", // international format, digits only; confirm this number is on WhatsApp
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://careliftmedicalequipment.com",
  state: "North Carolina",
  stateAbbr: "NC",
  region: "Greensboro & Winston-Salem, NC",
  areaText: "Guilford and Forsyth County",
  // PLACEHOLDER address: replace with the real one. Kept out of structured data until addressConfirmed is true.
  address: { street: "100 N Elm St", city: "Greensboro", zip: "27401" } as null | { street: string; city: string; zip: string },
  addressConfirmed: false,
  hours: "Mon–Sat 10am–6pm · Sunday closed" as null | string,
  gbpUrl: null as null | string,
};

export function waLink(message = "Hi CareLift, I'd like to ask about renting medical equipment.") {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  items: string[];
  forWho: string;
  sizing?: string; // "which one fits" guidance
  included?: string[]; // what comes with the rental
  note?: string; // compliance / prescription caveat shown on the page
};

// Categories mirror the reference sites' catalogue. Item names are generic equipment types; swap in real inventory.
export const CATEGORIES: Category[] = [
  {
    slug: "hospital-beds",
    name: "Hospital Beds",
    tagline: "Adjustable, comfortable care at home.",
    intro:
      "Rent a hospital bed for recovery, long-term care or hospice at home. Full-electric and bariatric models, delivered and set up in the room you choose.",
    items: ["Full-electric hospital beds", "Semi-electric hospital beds", "Bariatric hospital beds (higher weight capacity)", "Pressure-relief mattresses", "Overbed tables", "Bed rails and assist handles"],
    forWho: "Families caring for someone at home, patients returning from hospital, and hospice or palliative care.",
    sizing: "Tell us the patient's height and weight when you call. Standard beds suit most adults; bariatric beds are built for higher weight capacity and a wider sleeping surface.",
    included: ["Delivery and set up", "Bed rails and standard mattress", "A walkthrough of the controls", "Pickup when you are done"],
  },
  {
    slug: "seat-lift-chairs",
    name: "Seat Lift Chairs",
    tagline: "Stand up with ease.",
    intro:
      "A power lift chair gently raises you to standing and reclines for rest or sleep. Popular after knee, hip or back surgery, and for anyone who struggles to get out of a chair.",
    items: ["Medium lift chairs", "Large lift chairs", "Three-position recliner lift chairs", "Lift chairs with battery backup"],
    forWho: "Recovery after surgery, arthritis, limited strength, and caregivers who want safer transfers.",
    sizing: "Choose by height and weight: a medium chair generally suits average-height adults, a large chair suits taller or heavier users. If you are between sizes, call and we will help.",
    included: ["Delivery, placement and set up", "Demonstration of the remote and recline", "Support during the rental", "Pickup when you are done"],
  },
  {
    slug: "wheelchairs",
    name: "Wheelchairs",
    tagline: "Mobility for every stage of recovery.",
    intro:
      "Standard, heavy-duty, reclining and transport wheelchairs for recovery, appointments and travel.",
    items: ["Standard wheelchairs", "Heavy-duty wheelchairs", "Lightweight transport chairs", "Full-reclining wheelchairs", "Elevating leg rests", "Wheelchair cushions"],
    forWho: "Post-surgery recovery, appointments, family visits and temporary or long-term mobility needs.",
    sizing: "Seat width and weight capacity matter most. Share the user's height and weight and we will match a chair.",
  },
  {
    slug: "mobility-scooters",
    name: "Mobility Scooters",
    tagline: "Independence over longer distances.",
    intro:
      "Travel-friendly mobility scooters for errands, days out and visits, when walking is too tiring.",
    items: ["Four-wheel mobility scooters", "Three-wheel mobility scooters", "Travel scooters that disassemble for a car trunk"],
    forWho: "Visitors, short-term mobility needs, and anyone who tires on longer distances.",
    sizing: "Check weight capacity and range for your use. Ask us about portability if you plan to travel with it.",
  },
  {
    slug: "walking-aids",
    name: "Walking Aids",
    tagline: "Walk with confidence.",
    intro: "Walkers, rollators, canes and crutches for steadier movement during recovery or daily life.",
    items: ["Walkers", "Rollators", "Knee scooters", "Canes", "Crutches"],
    forWho: "Anyone recovering from surgery or injury, or needing extra stability at home.",
  },
  {
    slug: "bathroom-safety",
    name: "Bathroom Safety",
    tagline: "Safer routines at home.",
    intro: "Commodes, shower chairs and raised toilet seats that make the bathroom safer during recovery or ageing in place.",
    items: ["Bedside commodes", "Shower chairs and benches", "Raised toilet seats", "Grab bars and safety rails"],
    forWho: "Anyone at risk of falls or needing support with daily routines.",
  },
  {
    slug: "patient-lifts",
    name: "Patient Lifts",
    tagline: "Safer transfers for patient and caregiver.",
    intro: "Patient lifts make moving between bed, chair and commode safer and easier on caregivers. Delivered and set up with a demonstration.",
    items: ["Hydraulic patient lifts", "Electric patient lifts", "Sit-to-stand lifts", "Lift slings"],
    forWho: "Caregivers and families supporting someone with limited mobility.",
    sizing: "Choose a lift by patient weight and the room layout. Call us and we will advise on the best option.",
  },
  {
    slug: "cpm-machines",
    name: "CPM Machines",
    tagline: "Recover your range of motion.",
    intro: "Continuous passive motion (CPM) machines gently move the joint during recovery, usually after knee surgery. Rent for the weeks you need it instead of buying.",
    items: ["Knee CPM machines"],
    forWho: "Patients following knee surgery whose surgeon has recommended a CPM machine.",
    note: "Your surgeon or physical therapist should prescribe the settings and duration. We supply and set up the equipment.",
  },
  {
    slug: "respiratory",
    name: "Respiratory Equipment",
    tagline: "Breathing support at home.",
    intro: "Home oxygen concentrators and portable oxygen systems, delivered and explained.",
    items: ["Oxygen concentrators", "Home oxygen fill systems"],
    forWho: "Patients whose doctor has prescribed supplemental oxygen.",
    note: "Oxygen is prescribed by a doctor. Please have your prescription details ready when you call.",
  },
];

// Start small; add counties here as coverage grows (each gets its own page automatically).
export const COUNTIES = [
  { name: "Guilford", slug: "guilford-county-nc", cities: "Greensboro, High Point and nearby" },
  { name: "Forsyth", slug: "forsyth-county-nc", cities: "Winston-Salem and nearby" },
];

export const FAQS = [
  { q: "How does renting medical equipment work?", a: "Call or request a quote. We confirm what you need, deliver and set it up, and collect it when you are finished. There is no long-term commitment." },
  { q: "How much does a rental cost?", a: "Pricing depends on the item and how long you need it. Call us for pricing and we will give you a clear quote." },
  { q: "Does insurance or Medicare cover rentals?", a: "Coverage varies by plan and by item. Call us and we will explain your options. Ask your doctor or insurer about what your plan covers." },
  { q: "Which size or model should I choose?", a: "Tell us the user's height and weight and what the equipment is for. We will recommend a model that fits." },
  { q: "Where do you deliver?", a: "We currently deliver in Guilford and Forsyth County, including Greensboro and Winston-Salem. Tell us your ZIP code and we will confirm." },
  { q: "Can you deliver to a hospital or facility?", a: "Yes. We supply hospitals, rehab centres and care facilities as well as private homes." },
  { q: "Is the equipment cleaned between rentals?", a: "Yes. Every item is inspected, cleaned and sanitised before it goes out." },
];

export type Audience = { slug: string; name: string; headline: string; intro: string; points: string[]; categories: string[] };

export const AUDIENCES: Audience[] = [
  {
    slug: "families-and-home-care",
    name: "Families & Home Care",
    headline: "Care at home, made simpler",
    intro: "Caring for a parent, partner or relative at home is hard enough. We take the equipment side off your plate: you tell us what is needed, we deliver, set up and show you how it works.",
    points: ["A single call to arrange delivery and set up", "Equipment matched to height, weight and the room it will go in", "Short- or long-term rental, with no purchase commitment", "Collection when you no longer need it"],
    categories: ["hospital-beds", "seat-lift-chairs", "patient-lifts", "bathroom-safety"],
  },
  {
    slug: "post-surgery-recovery",
    name: "Post-Surgery Recovery",
    headline: "Heal at home without buying equipment",
    intro: "After knee, hip, back or other surgery you may only need equipment for a few weeks. Renting means you get what your surgeon recommends without paying for something that sits in the garage afterwards.",
    points: ["Lift chairs, walkers, wheelchairs and CPM machines", "Short-term rental for the recovery period", "Delivery arranged before or right after you come home", "Follow your surgeon's and therapist's guidance on what you need"],
    categories: ["seat-lift-chairs", "cpm-machines", "walking-aids", "wheelchairs"],
  },
  {
    slug: "hospice-and-palliative-care",
    name: "Hospice & Palliative Care",
    headline: "Comfort and dignity at home",
    intro: "When care happens at home, the right bed and equipment make a real difference. We work quickly and quietly, and we keep the process as gentle as possible for the family.",
    points: ["Hospital beds, pressure-relief mattresses and lifts", "Prompt delivery and set up", "Clear, patient explanations for family caregivers", "Collection handled sensitively"],
    categories: ["hospital-beds", "patient-lifts", "bathroom-safety", "wheelchairs"],
  },
  {
    slug: "hospitals-and-facilities",
    name: "Hospitals & Facilities",
    headline: "Rental supply for care providers",
    intro: "Hospitals, rehabilitation centres and care facilities can rent equipment from us to cover demand peaks and short-term needs. Call to discuss volumes, scheduling and invoicing.",
    points: ["Beds, wheelchairs, lifts and mobility equipment", "Scheduled and on-demand delivery", "Cleaned and inspected between rentals", "One point of contact for your team"],
    categories: ["hospital-beds", "wheelchairs", "patient-lifts", "walking-aids"],
  },
];

export type Guide = { slug: string; title: string; description: string; body: { h: string; p: string }[] };

// Draft informational copy; have it reviewed before launch. Generic guidance only, not medical advice.
export const GUIDES: Guide[] = [
  {
    slug: "renting-vs-buying-medical-equipment",
    title: "Renting vs. buying medical equipment: how to decide",
    description: "When it makes sense to rent a hospital bed, lift chair or wheelchair, and when buying is the better choice.",
    body: [
      { h: "Start with how long you need it", p: "If the need is a few weeks or months, such as recovery after surgery, renting is usually simpler. If the need is permanent, buying may make more sense over time." },
      { h: "Think about storage and upkeep", p: "Large items like hospital beds and lift chairs take up space and need maintenance. With a rental, delivery, set up and collection are handled for you." },
      { h: "Check what your plan covers", p: "Insurance and Medicare coverage varies by item and plan. Ask your doctor and insurer before you decide, and call us if you want to talk through the options." },
      { h: "Not sure yet? Start with a rental", p: "A rental lets you see what you really need before committing, and you can change or extend as things develop." },
    ],
  },
  {
    slug: "how-to-choose-a-lift-chair",
    title: "How to choose a lift chair: size, fit and features",
    description: "A plain-language guide to choosing the right size and type of lift chair for recovery or everyday use.",
    body: [
      { h: "Match the chair to your height and weight", p: "A chair that is too large or too small makes standing harder. Medium chairs generally suit average-height adults, while large chairs suit taller or heavier users." },
      { h: "Consider the recline", p: "Some chairs recline further for resting or sleeping. If you plan to sleep in the chair during recovery, ask for a model with a deep recline." },
      { h: "Check the room", p: "Measure the space and allow clearance from the wall for the recline. We can help you plan placement at delivery." },
      { h: "Ask about the controls", p: "A simple, easy-to-hold remote matters. We demonstrate the controls when we set up." },
    ],
  },
  {
    slug: "preparing-your-home-for-a-hospital-bed",
    title: "Preparing your home for a hospital bed",
    description: "Practical tips for choosing the room, clearing space and getting ready for hospital bed delivery.",
    body: [
      { h: "Pick the right room", p: "Choose a room with space on both sides of the bed for caregivers, access to a bathroom, and a power outlet within reach." },
      { h: "Measure the route", p: "Check doorways, hallways and stairs on the way to the room so the bed can be delivered and set up without trouble." },
      { h: "Clear the floor", p: "Remove loose rugs and clutter to reduce the risk of falls, and keep walkways wide enough for a walker or wheelchair." },
      { h: "Plan for comfort", p: "Think about lighting, a bedside table and a call system so the patient can reach what they need." },
    ],
  },
];
