import { FAQS } from "@/lib/site";

export function Faq() {
  return (
    <div>
      {FAQS.map((f) => (
        <details key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
          {f.list && <ul className="list">{f.list.map((x) => <li key={x}>{x}</li>)}</ul>}
        </details>
      ))}
    </div>
  );
}
