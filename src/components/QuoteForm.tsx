import { CATEGORIES } from "@/lib/site";

// Submits to Netlify Forms (form stub lives in public/__forms.html).
export function QuoteForm() {
  return (
    <form name="quote" method="POST" action="/thank-you/" data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="quote" />
      <p hidden><label>Do not fill: <input name="bot-field" /></label></p>
      <div className="field"><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" autoComplete="tel" required /></div>
      <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required /></div>
      <div className="field"><label htmlFor="zip">Delivery ZIP code</label><input id="zip" name="zip" inputMode="numeric" autoComplete="postal-code" required /></div>
      <div className="field">
        <label htmlFor="audience">This is for</label>
        <select id="audience" name="audience"><option>Home or family</option><option>Hospital or facility</option></select>
      </div>
      <div className="field">
        <label htmlFor="item">What do you need?</label>
        <select id="item" name="item">
          {CATEGORIES.map((c) => <option key={c.slug}>{c.name}</option>)}
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="duration">How long?</label>
        <select id="duration" name="duration"><option>A few days</option><option>1–4 weeks</option><option>1–3 months</option><option>Longer / not sure</option></select>
      </div>
      <div className="field"><label htmlFor="notes">Anything else? (optional)</label><textarea id="notes" name="notes" rows={3} /></div>
      <button className="btn" type="submit">Request a quote</button>
    </form>
  );
}
