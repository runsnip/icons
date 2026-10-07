import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Go module: a box, Go's speed lines the mark. From the files set. */
export const GoModIcon: Icon = {
  name: "GoModIcon",
  node: [
    ["rect", { x: 9, y: 5, width: 11.5, height: 14, rx: 2 }],
    ["path", { d: "M9 9.5h11.5" }],
    ["path", { d: "M3.5 9.5h2.5M3.5 13h2.5M3.5 16.5h2.5", ...SOLID_STROKE }],
  ],
};

export default GoModIcon;
