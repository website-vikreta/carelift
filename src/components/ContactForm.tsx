"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SITE } from "@/lib/site";
import { sendEnquiry } from "@/lib/emailjs";
import { DURATIONS, formatUsPhone, validate, type FormErrors, type FormValues } from "@/lib/validation";

const EMPTY: FormValues = { name: "", email: "", contact: "", zipCode: "", duration: "", message: "" };
const ORDER: (keyof FormValues)[] = ["name", "email", "contact", "zipCode", "duration", "message"];

export function ContactForm() {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<FormValues>(EMPTY);
  // "Check availability" on a rental option links here with ?period=<duration>; preselect it.
  useEffect(() => {
    const period = new URLSearchParams(window.location.search).get("period");
    if (period && (DURATIONS as readonly string[]).includes(period)) setValues((s) => ({ ...s, duration: period }));
  }, []);
  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);
  const [failure, setFailure] = useState<string | null>(null);

  const set = (k: keyof FormValues, v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    if (errors[k]) setErrors((s) => ({ ...s, [k]: undefined }));
  };
  const blur = (k: keyof FormValues) => {
    const msg = validate(values)[k];
    setErrors((s) => ({ ...s, [k]: msg }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setFailure(null);
    const found = validate(values);
    setErrors(found);
    const first = ORDER.find((k) => found[k]);
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    // Honeypot: real people never fill this hidden field. Pretend success so bots learn nothing.
    if ((new FormData(e.currentTarget).get("company") as string)?.length) return router.push("/thank-you/");

    setSending(true);
    const result = await sendEnquiry(values);
    setSending(false);
    if (result.ok) return router.push("/thank-you/");
    setFailure(
      result.reason === "not-configured"
        ? `The message form is not available yet. Please call us on ${SITE.phone}.`
        : result.reason === "rate-limited"
          ? `Too many messages just now. Please try again in a minute, or call us on ${SITE.phone}.`
          : `Sorry, your message did not go through. Please try again, or call us on ${SITE.phone}.`,
    );
  }

  const field = (k: keyof FormValues) => ({
    id: k,
    name: k,
    value: values[k],
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${k}-error` : undefined,
    onBlur: () => blur(k),
  });
  const err = (k: keyof FormValues) => errors[k] && <p className="error" id={`${k}-error`} role="alert">{errors[k]}</p>;

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input {...field("name")} autoComplete="name" maxLength={80} onChange={(e) => set("name", e.target.value)} />
        {err("name")}
      </div>
      <div className="field">
        <label htmlFor="email">Email address</label>
        <input {...field("email")} type="email" autoComplete="email" inputMode="email" maxLength={120} onChange={(e) => set("email", e.target.value)} />
        {err("email")}
      </div>
      <div className="field">
        <label htmlFor="contact">Phone number (US)</label>
        <div className="phone">
          <span className="prefix" aria-hidden="true">+1</span>
          <input {...field("contact")} type="tel" autoComplete="tel-national" inputMode="tel" placeholder="(212) 555-0123" maxLength={14} onChange={(e) => set("contact", formatUsPhone(e.target.value))} />
        </div>
        {err("contact")}
      </div>
      <div className="field">
        <label htmlFor="zipCode">Delivery ZIP code</label>
        <input {...field("zipCode")} autoComplete="postal-code" inputMode="numeric" maxLength={5} placeholder="10001" onChange={(e) => set("zipCode", e.target.value.replace(/\D/g, "").slice(0, 5))} />
        {err("zipCode")}
      </div>
      <div className="field">
        <label htmlFor="duration">How long do you need it?</label>
        <select {...field("duration")} onChange={(e) => set("duration", e.target.value)}>
          <option value="">Choose one</option>
          {DURATIONS.map((d) => <option key={d}>{d}</option>)}
        </select>
        {err("duration")}
      </div>
      <div className="field">
        <label htmlFor="message">Anything we should know? (optional)</label>
        <textarea {...field("message")} rows={3} maxLength={1000} onChange={(e) => set("message", e.target.value)} />
        {err("message")}
      </div>
      <div className="hp" aria-hidden="true"><label>Company<input name="company" tabIndex={-1} autoComplete="off" /></label></div>
      {failure && <p className="form-status" role="alert">{failure}</p>}
      <button className="btn" type="submit" disabled={sending}>{sending ? "Sending…" : "Send message"}</button>
      <p className="small" style={{ marginTop: 12 }}>We only use your details to reply to your enquiry.</p>
    </form>
  );
}
