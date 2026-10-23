export const SITE = {
  name: "CareLift Medical Equipment",
  short: "CareLift",
  // Placeholder number: will be replaced with a New York number. Change it here only.
  phone: "+1 (336) 653-4589",
  phoneHref: "tel:+13366534589",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://careliftmedicalequipment.com",
  region: "New York City & New Jersey",
  areaText: "New York City and New Jersey",
  hours: "Mon–Sat 10am–6pm · Sunday closed",
  // TODO: add street address once provided. null keeps it off the site and out of structured data.
  address: null as null | { street: string; city: string; state: string; zip: string },
  gbpUrl: null as null | string,
  // Drop the real PDF at public/downloads/carelift-liability-form.pdf (same filename). The current file is a placeholder.
  liabilityFormHref: "/downloads/carelift-liability-form.pdf",
};

// The only product: power lift chairs (lift recliners). Private rentals only.
export const PRODUCT = {
  slug: "lift-chair-rental",
  name: "Lift Chairs",
  intro:
    "Rent a power lift recliner for recovery, limited mobility or everyday comfort. A lift chair gently tilts forward to help you stand up, then reclines back for rest. We deliver it and set it up at your home.",
  benefits: [
    "Helps you stand up with less strain on knees, hips and back",
    "Reclines for resting, reading or sleeping",
    "Simple handheld remote, easy to use",
    "A comfortable armchair that fits in a living room",
  ],
  forWho: "People recovering from knee, hip, back or other surgery, people with arthritis or limited strength, older adults, and family members who want safer, easier seating at home.",
  sizing: "Chairs differ in size, style and fabric. Tell us your height and weight and a little about the room, and we will match a chair from what is available.",
  included: ["Delivery and set up at your home", "A walkthrough of the remote and recline", "Pickup when your rental ends"],
};

export const AREAS = [
  {
    name: "New York City",
    slug: "new-york-city",
    places: "Manhattan, Brooklyn, Queens, the Bronx and Staten Island",
    blurb: "We deliver lift chair rentals across New York City.",
  },
  {
    name: "New Jersey",
    slug: "new-jersey",
    places: "New Jersey and surrounding areas",
    blurb: "We deliver lift chair rentals across New Jersey and surrounding areas.",
  },
];

export const FAQS = [
  { q: "How does renting a lift chair work?", a: "Call or send us a message. We confirm which chair suits you and when it can be delivered, then we deliver it, set it up and show you the remote. When you are done, we collect it." },
  { q: "How much does it cost?", a: "Pricing depends on the chair and how long you need it. Call us for pricing and we will give you a clear quote." },
  { q: "Where do you deliver?", a: "We deliver in New York City and New Jersey, and some surrounding areas. Call us with your address and we will confirm." },
  { q: "How long can I rent a chair for?", a: "Tell us how long you need it and we will quote that rental period." },
  { q: "Do you take insurance or Medicare?", a: "No. We only do private rentals, so rentals are not billed to insurance or Medicare." },
  { q: "Will a lift chair fit in my home?", a: "Tell us about the room, the doorways and any stairs or elevator when you call, and we will advise before delivery." },
  { q: "Is there any paperwork?", a: "We use a liability form for rentals. You can download a copy from the footer of any page." },
];
