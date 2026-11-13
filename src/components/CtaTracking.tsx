"use client";
import { useEffect } from "react";
import { pushDataLayerEvent } from "@/lib/gtm";

// One delegated click listener for the whole site: any element with a `data-gtm-event` attribute
// reports a `cta_click` event (cta_type = that attribute's value, cta_label = `data-gtm-label` if
// set) to the dataLayer, for GTM/GA4 key events. Adding a new trackable CTA is just adding the attribute.
export function CtaTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-gtm-event]");
      if (!el) return;
      pushDataLayerEvent("cta_click", {
        cta_type: el.dataset.gtmEvent,
        cta_label: el.dataset.gtmLabel ?? null,
        page_path: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
