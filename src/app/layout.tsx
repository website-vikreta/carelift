import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyBar } from "@/components/StickyBar";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { localBusinessLd } from "@/lib/seo";

const fraunces = localFont({
  src: "./fonts/fraunces-latin-wght-normal.woff2",
  weight: "400 700",
  display: "swap",
  variable: "--font-head",
  adjustFontFallback: "Times New Roman",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `Medical Equipment Rental in Greensboro & Winston-Salem, NC | ${SITE.name}`, template: `%s | ${SITE.name}` },
  description: "Rent hospital beds, wheelchairs, lift chairs and more in Greensboro, Winston-Salem and nearby. Delivered, set up and collected. Call for pricing.",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#faf7f2" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fraunces.variable}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyBar />
        <JsonLd data={localBusinessLd()} />
      </body>
    </html>
  );
}
