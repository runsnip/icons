import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** taze: a package, the arrow raising its version the mark. From the files set. */
export const TazeIcon: Icon = {
  name: "TazeIcon",
  node: [
    ["rect", { x: 3.5, y: 11.5, width: 10, height: 9, rx: 2 }],
    ["path", { d: "M17.5 14V5M14.5 8l3-3 3 3", ...SOLID_STROKE }],
  ],
};

export default TazeIcon;
