"use client";
import Link from "next/link";
import { useState } from "react";
import { SITE, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./ContactButtons";

const LINKS = [
  ["/rentals/", "Rentals"],
  ["/service-areas/", "Where we deliver"],
  ["/how-renting-works/", "How it works"],
  ["/guides/", "Guides"],
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
        <div className="header-cta">
          <a className="btn" href={SITE.phoneHref}>Call now</a>
          <a className="btn wa" href={waLink()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon /> WhatsApp</a>
        </div>
        <button className="nav-toggle" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
