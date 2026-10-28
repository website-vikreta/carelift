import { STEPS } from "@/lib/site";

// The three-step rental process as a numbered list.
export function Steps() {
  return (
    <ol className="steps">
      {STEPS.map((s, i) => (
        <li key={s.title}>
          <span className="num" aria-hidden="true">{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
