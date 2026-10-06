import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Boxes centred on a vertical line. From the slides set. */
export const AlignObjectsCenterIcon: Icon = {
  name: "AlignObjectsCenterIcon",
  node: [
    ["path", { d: "M12 3.5v17", ...SOLID_STROKE }],
    ["rect", { x: 4.5, y: 5, width: 15, height: 5, rx: 1.5 }],
    ["rect", { x: 7.5, y: 14, width: 9, height: 5, rx: 1.5 }],
  ],
};

export default AlignObjectsCenterIcon;
