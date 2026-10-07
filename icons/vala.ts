import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Vala: a heavy V in a circle. From the files set. */
export const ValaIcon: Icon = {
  name: "ValaIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M8.5 8.5 12 16l3.5-7.5", ...SOLID_STROKE }],
  ],
};

export default ValaIcon;
