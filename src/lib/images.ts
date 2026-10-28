// Lift chair photos supplied by the client (Oct 2026), stored as resized WebP files in /public/images/chairs:
// `<file>-<width>.webp` for each width in `widths`. Rule: no photo appears twice on the same page.
// `color` is the average colour shown while the image lazy-loads; `position` is the CSS object-position for crops.
export type SitePhoto = { file: string; widths: number[]; alt: string; color: string; position?: string };

const chair = (file: string, widths: number[], alt: string, color: string, position?: string): SitePhoto => ({ file: `/images/chairs/${file}`, widths, alt, color, position });

const STANDING_UP = chair("lift-chair-rental-standing-up", [400, 640, 960, 1280], "Woman standing up with help from a dark brown power lift chair in her living room", "#8b8380", "52% 50%");
const RECLINED = chair("lift-chair-reclined", [400, 640, 960, 1024], "Man relaxing in a tan power lift chair fully reclined, with the handheld remote", "#9b8e7c", "50% 55%");
const MAN_STANDING = chair("lift-chair-man-standing-up", [400, 640, 732], "Man standing up from a tan lift chair raised in the lift position", "#988c7e", "45% 50%");
const COUPLE = chair("lift-chairs-couple-living-room", [400, 640, 937], "Two power lift chairs in a living room, one in use and one raised to help a woman stand", "#665a4e");
const GREY_RAISED = chair("power-lift-chair-grey-raised", [400, 640, 960, 1280], "Grey power lift recliner in the raised position with its handheld remote", "#b1acac");
const BEIGE = chair("lift-recliner-beige", [400, 640, 894], "Beige fabric power lift recliner chair in a living room", "#a0928a");
const WHITE = chair("lift-recliner-white-leather", [400, 640, 800], "Cream leather power lift recliner chair", "#ab9e8c");
const DARK_LEATHER = chair("lift-chair-dark-brown-leather", [400, 640, 960, 1280], "Dark brown leather power lift chair raised on its lift base", "#756e67");

export const IMAGES: Record<string, SitePhoto> = {
  hero: STANDING_UP,
  chair: RECLINED,
  "rental-page": MAN_STANDING,
  about: COUPLE,
};

// "Styles vary" row on the rental options page (never that page's own hero photo).
export const STYLES: SitePhoto[] = [BEIGE, WHITE, GREY_RAISED, DARK_LEATHER];
