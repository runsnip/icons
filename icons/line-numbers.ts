import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** Line numbers: lines of text, each numbered in a column ruled off at its left. From the insert set. */
export const LineNumbersIcon: Icon = {
  name: "LineNumbersIcon",
  node: [
    ["path", { d: "M10 6h10.5M10 12h10.5M10 18h10.5M8 3.5v17" }],
    ["path", { d: "M3.5 6h2M3.5 12h2M3.5 18h2", ...SOLID_STROKE }],
  ],
};

export default LineNumbersIcon;
