// Thin wrapper around the GTM dataLayer. Safe to call even when GTM is disabled (SITE.gtmId is null)
// or hasn't loaded yet: it just initializes the array, which GTM also does when it does load.
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function pushDataLayerEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
