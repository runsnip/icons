import type { Icon } from "../types";
import { SOLID } from "../system";

/** Processing: a sketch's canvas, a stroke drawn on it ending in a point, the point the mark. From the files set. */
export const ProcessingIcon: Icon = {
  name: "ProcessingIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M7.5 16.5 13 8" }],
    ["circle", { cx: 16, cy: 15, r: 2, ...SOLID }],
  ],
};

export default ProcessingIcon;
