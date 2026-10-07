import type { Icon } from "../types";
import { SOLID } from "../system";

/** WXT: a puzzle piece, a browser extension, its knob the mark. From the files set. */
export const WxtIcon: Icon = {
  name: "WxtIcon",
  node: [
    ["path", { d: "M4.5 9.5h12V13a2.5 2.5 0 0 1 0 5v2.5h-12Z" }],
    ["circle", { cx: 10.5, cy: 6.5, r: 3, ...SOLID }],
  ],
};

export default WxtIcon;
