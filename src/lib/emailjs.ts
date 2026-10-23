import type { FormValues } from "./validation";
import { toUsPhoneE164Display } from "./validation";

// EmailJS is called straight from the browser through its REST API (no extra dependency).
// Values come from environment variables, inlined at build time (set them in Netlify, then redeploy):
//   NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
// The EmailJS template must use these variables: {{title}} {{name}} {{email}} {{contact}} {{zipCode}} {{duration}} {{message}}
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export const emailConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export type SendResult = { ok: true } | { ok: false; reason: "not-configured" | "rate-limited" | "failed" };

export async function sendEnquiry(v: FormValues): Promise<SendResult> {
  if (!emailConfigured) return { ok: false, reason: "not-configured" };
  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        template_params: {
          title: "Lift chair rental enquiry",
          name: v.name.trim(),
          email: v.email.trim(),
          contact: toUsPhoneE164Display(v.contact) ?? v.contact,
          zipCode: v.zipCode.trim(),
          duration: v.duration,
          message: v.message.trim() || "(no message)",
        },
      }),
    });
    if (res.ok) return { ok: true };
    return { ok: false, reason: res.status === 429 ? "rate-limited" : "failed" };
  } catch {
    return { ok: false, reason: "failed" };
  }
}
