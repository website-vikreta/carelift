"use client";
import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/lib/site";

const LINKS = [
  ["/rentals/", "Rentals"],
  ["/service-areas/", "Service areas"],
  ["/how-renting-works/", "How it works"],
  ["/faq/", "FAQ"],
  ["/about/", "About"],
  ["/contact/", "Contact"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="wrap">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          Care<span>Lift</span>
        </Link>
        <nav className={`nav${open ? " open" : ""}`} aria-label="Primary">
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
        <a className="btn header-cta" href={SITE.phoneHref}>
          Call {SITE.phone}
        </a>
        <button className="nav-toggle" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
