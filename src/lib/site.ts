export const SITE = {
  name: "CareLift Medical Equipment",
  short: "CareLift",
  phone: "+1 (336) 653-4589",
  phoneHref: "tel:+13366534589",
  smsHref: "sms:+13366534589",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://carelift.example",
  state: "New Jersey",
  // TODO: add street address + hours once provided; they feed the footer, Contact page and JSON-LD.
  address: null as null | { street: string; city: string; zip: string },
  hours: null as null | string,
  gbpUrl: null as null | string,
};

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

export const COUNTIES = [
  "Atlantic", "Bergen", "Burlington", "Camden", "Cape May", "Cumberland", "Essex", "Gloucester", "Hudson", "Hunterdon", "Mercer",
  "Middlesex", "Monmouth", "Morris", "Ocean", "Passaic", "Salem", "Somerset", "Sussex", "Union", "Warren",
].map((name) => ({ name, slug: `${name.toLowerCase().replace(/\s+/g, "-")}-county-nj` }));

export const FAQS = [
  { q: "How does renting medical equipment work?", a: "Call or request a quote. We confirm what you need, deliver and set it up, and collect it when you are finished. There is no long-term commitment." },
  { q: "How much does a rental cost?", a: "Pricing depends on the item and how long you need it. Call us for pricing and we will give you a clear quote." },
  { q: "Does insurance or Medicare cover rentals?", a: "Coverage varies by plan and by item. Call us and we will explain your options. Ask your doctor or insurer about what your plan covers." },
  { q: "Which size or model should I choose?", a: "Tell us the user's height and weight and what the equipment is for. We will recommend a model that fits." },
  { q: "Do you deliver across New Jersey?", a: "Yes, we serve all New Jersey counties. Tell us your ZIP code and we will confirm delivery timing." },
  { q: "Can you deliver to a hospital or facility?", a: "Yes. We supply hospitals, rehab centres and care facilities as well as private homes." },
  { q: "Is the equipment cleaned between rentals?", a: "Yes. Every item is inspected, cleaned and sanitised before it goes out." },
];
