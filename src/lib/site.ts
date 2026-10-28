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
  address: { street: "363 E Milton Ave", city: "Rahway", state: "NJ", zip: "07065" } as null | { street: string; city: string; state: string; zip: string },
  mapsHref: "https://www.google.com/maps/search/?api=1&query=363+E+Milton+Ave+Rahway+NJ+07065",
  gbpUrl: null as null | string,
  // Drop the real PDF at public/downloads/carelift-liability-form.pdf (same filename). The current file is a placeholder.
  liabilityFormHref: "/downloads/carelift-liability-form.pdf",
};

// The only product: power lift chairs (lift recliners). Private rentals only.
export const PRODUCT = {
  slug: "lift-chair-rental",
  intro: "A power lift chair that helps you stand up and sit down, then reclines for rest.",
  benefits: ["Stand up with less strain", "Rest at a raised angle", "Simple handheld remote", "Fits like a regular armchair"],
  included: ["Delivery and set up", "Quick walkthrough of the remote", "Free pickup at the end"],
};

// Rental periods offered. Prices are never shown: "call for pricing".
export const RENTALS = [
  {
    name: "Weekly rental",
    text: "Two-week minimum, then week by week.",
  },
  {
    name: "6-week rental",
    text: "One booking for a longer recovery.",
  },
  {
    name: "Long-term rental",
    text: "Ongoing support, no need to buy.",
  },
];

export const STEPS = [
  { title: "Call or message us", text: "Tell us where and for how long." },
  { title: "We deliver and set up", text: "In the room you choose." },
  { title: "We pick it up", text: "Free, when you are done." },
];

export const AREAS = [
  { name: "New York City", places: "Manhattan, Brooklyn, Queens, the Bronx, Staten Island" },
  { name: "New Jersey", places: "Statewide, from our base in Rahway" },
];

export const SURGERIES = ["Knee or hip replacement", "Back or shoulder surgery", "Heart or abdominal surgery"];

export type Faq = { q: string; a: string; list?: string[] };
export const FAQS: Faq[] = [
  { q: "How much does it cost?", a: "It depends on the rental period and address. Call us for a quote." },
  { q: "How fast can you deliver?", a: "Same-day or next-day delivery may be available. Call to check." },
  { q: "Does every chair lift and recline?", a: "Yes, every chair has both." },
  { q: "Who rents a lift chair?", a: "Most often people recovering from:", list: SURGERIES },
  { q: "Can I choose the colour or style?", a: "Styles vary with availability. We match a chair to your height and weight." },
  { q: "Do you take insurance or Medicare?", a: "No. Private rentals only." },
  { q: "Is there any paperwork?", a: "A short liability form, linked in the footer." },
];

// Shown on /about/. Photo supplied by the client.
export const OWNER = {
  name: "Arvind Dhankhad",
  role: "Owner",
  photo: "/images/arvind-dhankhad.webp",
  story:
    "Arvind runs the customer experience and community side of CareLift. He believes the relationship matters as much as the result, and that the people whose homes we work in should feel respected throughout the whole process, not just at the end.",
};
