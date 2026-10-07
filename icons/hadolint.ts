import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Dockerfile lint: stacked containers, the tick the mark. From the files set. */
export const HadolintIcon: Icon = {
  name: "HadolintIcon",
  node: [
    ["rect", { x: 3.5, y: 14.5, width: 5, height: 5, rx: 1 }],
    ["rect", { x: 9.5, y: 14.5, width: 5, height: 5, rx: 1 }],
    ["rect", { x: 9.5, y: 8.5, width: 5, height: 5, rx: 1 }],
    ["path", { d: "M15.5 8 17.5 10l3-4.5", ...SOLID_STROKE }],
  ],
};

export default HadolintIcon;
