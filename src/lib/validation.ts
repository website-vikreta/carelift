// Contact form validation. Pure functions so they can be tested without a browser.

export type FormValues = { name: string; email: string; contact: string; zipCode: string; duration: string; message: string };
export type FormErrors = Partial<Record<keyof FormValues, string>>;

export const DURATIONS = ["Weekly (2-week minimum)", "6 weeks", "Long-term", "Not sure yet"] as const;

/** Digits only, capped at 10. A leading 1 is the US country code (area codes never start with 1), so it is dropped. */
export function usDigits(input: string): string {
  let d = input.replace(/\D/g, "");
  if (d.startsWith("1")) d = d.slice(1);
  return d.slice(0, 10);
}

/** (555) 123-4567 style display while typing. */
export function formatUsPhone(input: string): string {
  const d = usDigits(input);
  if (d.length <= 3) return d;
  if (d.length <= 6) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

/** NANP rule: area code and exchange both start with 2-9. Returns "+1 (555) 123-4567" or null. */
export function toUsPhoneE164Display(input: string): string | null {
  const d = usDigits(input);
  if (!/^[2-9]\d{2}[2-9]\d{6}$/.test(d)) return null;
  return `+1 (${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const NAME = /^[\p{L}][\p{L}\s'.-]*$/u;

export function validate(v: FormValues): FormErrors {
  const e: FormErrors = {};
  const name = v.name.trim();
  if (!name) e.name = "Please enter your name.";
  else if (name.length < 2) e.name = "Please enter your full name.";
  else if (name.length > 80 || !NAME.test(name)) e.name = "Please use letters only for your name.";

  const email = v.email.trim();
  if (!email) e.email = "Please enter your email address.";
  else if (email.length > 120 || !EMAIL.test(email)) e.email = "Please enter a valid email address, like name@example.com.";

  if (!v.contact.trim()) e.contact = "Please enter your phone number.";
  else if (!toUsPhoneE164Display(v.contact)) e.contact = "Please enter a valid US phone number with 10 digits, like (212) 555-0123.";

  if (!v.zipCode.trim()) e.zipCode = "Please enter your delivery ZIP code.";
  else if (!/^\d{5}$/.test(v.zipCode.trim())) e.zipCode = "Please enter a 5-digit US ZIP code.";

  if (!(DURATIONS as readonly string[]).includes(v.duration)) e.duration = "Please choose how long you need the chair.";

  if (v.message.trim().length > 1000) e.message = "Please keep your message under 1,000 characters.";
  return e;
}
