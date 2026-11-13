import Script from "next/script";
import { SITE } from "@/lib/site";

// Google Tag Manager, added at the client's request (Nov 2026). Renders nothing when SITE.gtmId is null.
// Standard GTM snippet split in two: this loader (as early as possible) and the <noscript> fallback,
// which goes right after the opening <body> tag so GTM still fires with JavaScript disabled.
export function GoogleTagManager() {
  if (!SITE.gtmId) return null;
  return (
    <Script id="gtm" strategy="beforeInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${SITE.gtmId}');`}
    </Script>
  );
}

export function GoogleTagManagerNoScript() {
  if (!SITE.gtmId) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${SITE.gtmId}`}
        height={0}
        width={0}
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
