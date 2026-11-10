// Lift chair photos supplied by the client (Oct 2026), stored as resized WebP files in /public/images/chairs:
// `<file>-<width>.webp` for each width in `widths`. Rule: no photo appears twice on the same page.
// `color` is the average color shown while the image lazy-loads; `position` is the CSS object-position for crops.
// INFOGRAPHIC is the client's product infographic (Nov 2026), used whole and unedited, at the client's request.
export type SitePhoto = { file: string; widths: number[]; alt: string; color: string; position?: string; fit?: "cover" | "contain" };

const chair = (file: string, widths: number[], alt: string, color: string, position?: string): SitePhoto => ({ file: `/images/chairs/${file}`, widths, alt, color, position });

const STANDING_UP = chair("lift-chair-rental-standing-up", [400, 640, 960, 1280], "Woman standing up with help from a dark brown power lift chair in her living room", "#8b8380", "52% 50%");
const RECLINED = chair("lift-chair-reclined", [400, 640, 960, 1024], "Man relaxing in a tan power lift chair fully reclined, with the handheld remote", "#9b8e7c", "50% 55%");
const MAN_STANDING = chair("lift-chair-man-standing-up", [400, 640, 732], "Man standing up from a tan lift chair raised in the lift position", "#988c7e", "45% 50%");
// "contain": show the whole picture, never cropped to fill the frame, even when the frame's shape doesn't match it.
const INFOGRAPHIC: SitePhoto = { ...chair("power-lift-recliner-infographic", [400, 640, 960, 1320], "Power lift recliner chair: napping, watching TV and standing up positions, with the lift mechanism and remote shown", "#d4d0d0"), fit: "contain" };
const GREY_RAISED = chair("power-lift-chair-grey-raised", [400, 640, 960, 1280], "Gray power lift recliner in the raised position with its handheld remote", "#b1acac");
const DARK_LEATHER = chair("lift-chair-dark-brown-leather", [400, 640, 960, 1280], "Dark brown leather power lift chair raised on its lift base", "#756e67");

export const IMAGES: Record<string, SitePhoto> = {
  hero: STANDING_UP,
  chair: RECLINED,
  "rental-page": MAN_STANDING,
  about: INFOGRAPHIC,
};

// "Styles vary" row on the rental options page (never that page's own hero photo).
// Reuses INFOGRAPHIC (also the About page's photo, a different page, so that's fine),
// after the earlier close reclined crop looked blurry/zoomed when forced into this square tile.
export const STYLES: SitePhoto[] = [INFOGRAPHIC, RECLINED, GREY_RAISED, DARK_LEATHER];
