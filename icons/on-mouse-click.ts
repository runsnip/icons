import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/**
 * On mouse click: CursorIcon's pointer, scaled to 12/13 and moved down and right, with three short rays at its tip —
 * the click. The pointer is drawn in outline and the rays are the one thickened motif. Advance a slide on a click.
 * From the slides set.
 */
export const OnMouseClickIcon: Icon = {
  name: "OnMouseClickIcon",
  node: [
    ["path", { d: "M9 9 20.5 13.3l-5.6 1.6-1.6 5.6Z" }],
    ["path", { d: "M9 3.5V6M3.5 9H6M4.75 4.75l1.5 1.5", ...SOLID_STROKE }],
  ],
};

export default OnMouseClickIcon;
