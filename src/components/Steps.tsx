import { Photo } from "./Photo";

const STEPS = [
  { title: "Call or message us", text: "Tell us how long you need a chair and where it is going. We confirm availability and pricing." },
  { title: "We deliver and set up", text: "We bring the lift chair to your home, set it up in the room you choose and show you how the remote works." },
  { title: "We collect it", text: "When your rental ends, we pick the chair up. Nothing to return or ship." },
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
