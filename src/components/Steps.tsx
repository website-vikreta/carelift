import { Photo } from "./Photo";

const STEPS = [
  { title: "Call or message us", text: "Tell us what you need, for how long, and your ZIP code. We confirm availability and pricing on the spot." },
  { title: "We deliver and set up", text: "We bring the equipment to your home or facility, set it up in the right room and show you how it works." },
  { title: "We collect it", text: "When you are finished, we pick it up. No long-term commitment, and every item is cleaned before its next rental." },
];

// The three-step rental process, each step with its own photo. Used on the deep (dark) band.
export function Steps() {
  return (
    <ol className="steps">
      {STEPS.map((s, i) => (
        <li key={s.title}>
          <Photo id={`step-${i + 1}`} ratio="4:3" sizes="(min-width: 760px) 340px, calc(100vw - 40px)" />
          <span className="num" aria-hidden="true">0{i + 1}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
