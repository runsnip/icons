import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Forth: the digit 4 in a frame, the 4 the mark. From the files set. */
export const ForthIcon: Icon = {
  name: "ForthIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M13 7.5 8 14h8.5M13.5 10.5v6", ...SOLID_STROKE }],
  ],
};

export default ForthIcon;
