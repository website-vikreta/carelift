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
};

// TODO: replace the items with the exact list from the reference sites.
export const CATEGORIES: Category[] = [
  {
    slug: "hospital-beds",
    name: "Hospital Beds",
    tagline: "Comfortable, adjustable care at home.",
    intro:
      "Rent a hospital bed for recovery, long-term care or hospice at home. Electric and manual models, with mattresses and rails, delivered and set up in the room you choose.",
    items: ["Electric hospital beds", "Semi-electric hospital beds", "Manual hospital beds", "Pressure-relief mattresses", "Bed rails and bed assist handles", "Overbed tables"],
    forWho: "Families caring for a loved one at home, patients returning from hospital, and hospice or palliative care.",
  },
  {
    slug: "wheelchairs",
    name: "Wheelchairs",
    tagline: "Mobility for every stage of recovery.",
    intro:
      "Standard, lightweight and transport wheelchairs for short-term recovery, appointments and travel. Call us and we will help match the right size and seat.",
    items: ["Standard wheelchairs", "Lightweight wheelchairs", "Transport chairs", "Reclining wheelchairs", "Elevating leg rests", "Wheelchair cushions"],
    forWho: "Post-surgery recovery, appointments, family visits and temporary or long-term mobility needs.",
  },
  {
    slug: "mobility-aids",
    name: "Mobility Aids",
    tagline: "Walk with confidence.",
    intro:
      "Walkers, rollators, knee scooters and canes for steadier movement during recovery or daily life.",
    items: ["Walkers", "Rollators", "Knee scooters", "Crutches and canes", "Mobility scooters"],
    forWho: "Anyone recovering from surgery or injury, or needing extra stability at home.",
  },
  {
    slug: "lift-chairs-and-patient-lifts",
    name: "Lift Chairs & Patient Lifts",
    tagline: "Stand and transfer safely.",
    intro:
      "Seat lift chairs help you stand up without strain, and patient lifts make transfers safer for caregivers. Delivered, set up and demonstrated.",
    items: ["Seat lift chairs", "Hoyer-style patient lifts", "Sit-to-stand lifts", "Transfer benches and slings"],
    forWho: "Older adults, people with arthritis or limited strength, and caregivers who need safer transfers.",
  },
  {
    slug: "bathroom-safety",
    name: "Bathroom Safety",
    tagline: "Safer routines at home.",
    intro:
      "Commodes, shower chairs and raised toilet seats that make the bathroom safer during recovery or ageing in place.",
    items: ["Bedside commodes", "Shower chairs and benches", "Raised toilet seats", "Grab bars and safety rails"],
    forWho: "Anyone at risk of falls or needing support with daily routines.",
  },
  {
    slug: "post-surgery-recovery",
    name: "Post-Surgery Recovery",
    tagline: "Everything for a smoother recovery.",
    intro:
      "Short-term rental equipment for the weeks after surgery, so you can heal at home without buying what you will only need briefly.",
    items: ["Continuous passive motion (CPM) machines", "Cold therapy units", "Recovery recliners", "Walking aids and wheelchairs"],
    forWho: "Joint replacement, orthopedic and other surgical recovery.",
  },
  {
    slug: "bariatric",
    name: "Bariatric Equipment",
    tagline: "Built for higher weight capacities.",
    intro:
      "Heavy-duty beds, wheelchairs, commodes and walkers rated for higher weight capacities, delivered with the same care and set-up.",
    items: ["Bariatric hospital beds", "Bariatric wheelchairs", "Bariatric commodes", "Bariatric walkers and rollators"],
    forWho: "Patients who need equipment with higher weight capacity and a wider seat or frame.",
  },
];

export const COUNTIES = [
  "Atlantic", "Bergen", "Burlington", "Camden", "Cape May", "Cumberland", "Essex", "Gloucester", "Hudson", "Hunterdon", "Mercer",
  "Middlesex", "Monmouth", "Morris", "Ocean", "Passaic", "Salem", "Somerset", "Sussex", "Union", "Warren",
].map((name) => ({ name, slug: `${name.toLowerCase().replace(/\s+/g, "-")}-county-nj` }));

export const FAQS = [
  { q: "How does renting medical equipment work?", a: "Call or request a quote. We confirm what you need, deliver and set it up, and collect it when you are finished. There is no long-term commitment." },
  { q: "How much does a rental cost?", a: "Pricing depends on the item and how long you need it. Call us for pricing and we will give you a clear quote." },
  { q: "Do you deliver across New Jersey?", a: "Yes, we serve all New Jersey counties. Tell us your ZIP code and we will confirm delivery timing." },
  { q: "Can you deliver to a hospital or facility?", a: "Yes. We supply hospitals, rehab centres and care facilities as well as private homes." },
  { q: "Is the equipment cleaned between rentals?", a: "Yes. Every item is inspected, cleaned and sanitised before it goes out." },
];
