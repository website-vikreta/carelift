import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyBar } from "@/components/StickyBar";
import { JsonLd } from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { localBusinessLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `Medical Equipment Rental in North Carolina | ${SITE.name}`, template: `%s | ${SITE.name}` },
  description: "Rent hospital beds, wheelchairs, lift chairs and more across North Carolina. Delivered, set up and collected. Call for pricing.",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#faf7f2" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
