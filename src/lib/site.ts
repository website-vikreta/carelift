export const SITE = {
  name: "CareLift Medical Equipment",
  short: "CareLift",
  // Real New Jersey number. Change it here only.
  phone: "+1 (848) 385-8415",
  phoneHref: "tel:+18483858415",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://careliftmedicalequipment.com",
  region: "New Jersey",
  areaText: "New Jersey, with delivery to New York City and other surrounding areas",
  hours: "Open every day, 7am–10pm",
  address: { street: "363 E Milton Ave", city: "Rahway", state: "NJ", zip: "07065" } as null | { street: string; city: string; state: string; zip: string },
  mapsHref: "https://www.google.com/maps/search/?api=1&query=363+E+Milton+Ave+Rahway+NJ+07065",
  mapEmbed: "https://maps.google.com/maps?q=363+E+Milton+Ave,+Rahway,+NJ+07065&z=14&output=embed",
  gbpUrl: "https://share.google/7p3PC4SFOV8MOFxQP" as null | string,
  // Drop the real PDF at public/downloads/carelift-liability-form.pdf (same filename). The current file is a placeholder.
  liabilityFormHref: "/downloads/carelift-liability-form.pdf",
};

// The only product: power lift chairs (lift recliners). Private rentals only.
export const PRODUCT = {
  slug: "lift-chair-rental",
  intro: "A power lift chair that helps you stand up and sit down, then reclines for rest.",
  benefits: ["Stand up with less strain", "Rest at a raised angle", "Simple handheld remote", "Fits like a regular armchair"],
  included: ["Delivery and set up", "Quick walkthrough of the remote", "Pickup at the end"],
};

// Rental periods offered. Prices are never shown: "call for pricing".
export const RENTALS = [
  {
    name: "Weekly rental",
    text: "Two-week minimum, then week by week.",
    duration: "Weekly (2-week minimum)",
  },
  {
    name: "6-week rental",
    text: "One booking for a longer recovery.",
    duration: "6 weeks",
  },
  {
    name: "Long-term rental",
    text: "Ongoing support, no need to buy.",
    duration: "Long-term",
  },
];

export const STEPS = [
  { title: "Call or message us", text: "Tell us where and for how long." },
  { title: "We deliver and set up", text: "In the room you choose." },
  { title: "We pick it up", text: "All included, when you are done." },
];

export const AREAS = [
  { name: "New Jersey", places: "Statewide, from our base in Rahway" },
  { name: "New York City", places: "Manhattan, Brooklyn, Queens, the Bronx, Staten Island" },
];

export const SURGERIES = ["Knee or hip replacement", "Back or shoulder surgery", "Heart or abdominal surgery"];

export type Faq = { q: string; a: string; list?: string[] };
export const FAQS: Faq[] = [
  { q: "How much does it cost?", a: "It depends on the rental period and address. Delivery, set-up and pickup are included. Call us for a quote." },
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
    "“Comfort, dignity and peace of mind should never be out of reach. I started CareLift so getting the equipment you need is simple, convenient and stress-free — from delivery and setup to pickup. Thank you for trusting us: your comfort is our commitment.”",
};
