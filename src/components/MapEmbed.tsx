import { SITE } from "@/lib/site";

// Google Maps embed of our Rahway address (no API key). Lazy-loaded so it costs nothing until scrolled near.
export function MapEmbed() {
  const a = SITE.address;
  if (!a) return null;
  return (
    <div className="map">
      <iframe
        src={SITE.mapEmbed}
        title={`Map: ${SITE.name}, ${a.street}, ${a.city}, ${a.state} ${a.zip}`}
        width={600}
        height={360}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
