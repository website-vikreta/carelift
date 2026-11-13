import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyBar } from "@/components/StickyBar";
import { JsonLd } from "@/components/JsonLd";
import { GoogleTagManager, GoogleTagManagerNoScript } from "@/components/GoogleTagManager";
import { SITE } from "@/lib/site";
import { localBusinessLd } from "@/lib/seo";

const manrope = localFont({
  src: "./fonts/manrope-latin-wght-normal.woff2",
  weight: "200 800",
  display: "swap",
  variable: "--font-sans",
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `Lift Chair Rental in New Jersey & Surrounding Areas | ${SITE.name}`, template: `%s | ${SITE.name}` },
  description: "Power lift chair rentals in New Jersey and surrounding areas, including New York City: weekly, 6-week and long-term. Delivery, set-up and pickup included. Call for pricing.",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#faf7f2" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <GoogleTagManager />
        <GoogleTagManagerNoScript />
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
