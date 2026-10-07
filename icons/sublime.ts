import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Sublime Text: a square, its folded S the mark. From the files set. */
export const SublimeIcon: Icon = {
  name: "SublimeIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
    ["path", { d: "M16 7.5 8 10l8 4-8 2.5", ...SOLID_STROKE }],
  ],
};

export default SublimeIcon;
