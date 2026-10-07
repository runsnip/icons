import type { Icon } from "../types";
import { SOLID } from "../system";

/** Visual regression: two screenshots overlapping, their difference the mark. From the files set. */
export const VisualDiffIcon: Icon = {
  name: "VisualDiffIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 11, height: 11, rx: 2 }],
    ["rect", { x: 9.5, y: 9.5, width: 11, height: 11, rx: 2 }],
    ["rect", { x: 9.5, y: 9.5, width: 5, height: 5, rx: 1, ...SOLID }],
  ],
};

export default VisualDiffIcon;
