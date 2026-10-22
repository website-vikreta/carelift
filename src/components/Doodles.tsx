// Hand-drawn line doodles (inline SVG, no extra requests). Use sparingly: one underline per page plus the step icons.
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;

export function Underline({ children }: { children: React.ReactNode }) {
  return (
    <span className="u">
      {children}
      <svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M2 7 C 28 2, 52 11, 84 6 S 142 3, 170 7 S 192 8, 198 5" {...stroke} strokeWidth={3} />
      </svg>
    </span>
  );
}

export function PhoneDoodle() {
  return (
    <svg className="doodle" viewBox="0 0 56 56" aria-hidden="true" focusable="false">
      <path d="M19 8h18a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H19a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4Z" {...stroke} />
      <path d="M26 42h4" {...stroke} />
      <path d="M46 16q4 6 0 12M50 12q7 10 0 20M10 16q-4 6 0 12" {...stroke} />
    </svg>
  );
}

export function VanDoodle() {
  return (
    <svg className="doodle" viewBox="0 0 56 56" aria-hidden="true" focusable="false">
      <path d="M5 38V22a3 3 0 0 1 3-3h25v19M33 25h9l7 8v5h-3" {...stroke} />
      <path d="M5 38h7M22 38h15" {...stroke} />
      <circle cx="17" cy="40" r="4.5" {...stroke} />
      <circle cx="41" cy="40" r="4.5" {...stroke} />
      <path d="M12 26h14" {...stroke} />
    </svg>
  );
}

export function HomeCheckDoodle() {
  return (
    <svg className="doodle" viewBox="0 0 56 56" aria-hidden="true" focusable="false">
      <path d="M7 28 28 9l21 19" {...stroke} />
      <path d="M13 24v22h30V24" {...stroke} />
      <path d="M22 35l5 5 9-11" {...stroke} />
    </svg>
  );
}
