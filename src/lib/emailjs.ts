import { toUsPhoneE164Display, type FormValues } from "./validation.ts";

// EmailJS is called straight from the browser through its REST API (no extra dependency).
// Values come from environment variables (Netlify in production, .env.local for local dev; never committed) and are
// inlined at build time, so rebuild after changing them:
//   NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
// The EmailJS template must use these variables: {{title}} {{name}} {{email}} {{contact}} {{zipCode}} {{duration}} {{message}}
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

/** Empty values and `your_...` placeholders count as not configured. */
export const isRealValue = (v: string | undefined) => Boolean(v && v.trim() && !v.startsWith("your_"));
export const emailConfigured = [SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY].every(isRealValue);

export type SendResult = { ok: true } | { ok: false; reason: "not-configured" | "rate-limited" | "failed" };

/** The exact params the client's EmailJS template expects. Kept separate so it can be tested. */
export function templateParams(v: FormValues, flagged = false) {
  const name = v.name.trim();
  const zipCode = v.zipCode.trim();
  return {
    title: `${flagged ? "[check: possible spam] " : ""}Lift chair rental: ${name}, ${zipCode}, ${v.duration}`,
    name,
    email: v.email.trim(),
    contact: toUsPhoneE164Display(v.contact) ?? v.contact,
    zipCode,
    duration: v.duration,
    message: v.message.trim() || "(no message)",
  };
}

export async function sendEnquiry(v: FormValues, flagged = false): Promise<SendResult> {
  if (!emailConfigured) {
    console.error("EmailJS is not configured: set the NEXT_PUBLIC_EMAILJS_* environment variables, then rebuild.");
    return { ok: false, reason: "not-configured" };
  }
  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ service_id: SERVICE_ID, template_id: TEMPLATE_ID, user_id: PUBLIC_KEY, template_params: templateParams(v, flagged) }),
    });
    if (res.ok) return { ok: true };
    // EmailJS explains failures in plain text (bad ID, origin not allowed, quota). Log it for whoever is debugging.
    console.error(`EmailJS error ${res.status}: ${await res.text().catch(() => "")}`);
    return { ok: false, reason: res.status === 429 ? "rate-limited" : "failed" };
  } catch (err) {
    console.error("EmailJS request failed", err);
    return { ok: false, reason: "failed" };
  }
}
