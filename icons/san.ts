import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** San: three bars in a square, the middle one thickened. From the files set. */
export const SanIcon: Icon = {
  name: "SanIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M8 8h8M7 16h10" }],
    ["path", { d: "M9.5 12h5", ...SOLID_STROKE }],
  ],
};

export default SanIcon;
