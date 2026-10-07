import type { Icon } from "../types";
import { SOLID } from "../system";

/** Pkl, the configuration language: a pickle, its bumps the mark. From the files set. */
export const PklIcon: Icon = {
  name: "PklIcon",
  node: [
    ["rect", { x: 3.5, y: 7, width: 17, height: 10, rx: 5 }],
    ["circle", { cx: 8.5, cy: 12, r: 1.4, ...SOLID }],
    ["circle", { cx: 12, cy: 12, r: 1.4, ...SOLID }],
    ["circle", { cx: 15.5, cy: 12, r: 1.4, ...SOLID }],
  ],
};

export default PklIcon;
