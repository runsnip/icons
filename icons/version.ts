import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A version: a label tied on by its hole, a numeral on it, the numeral the mark. From the ops set. */
export const VersionIcon: Icon = {
  name: "VersionIcon",
  node: [
    ["path", { d: "M3.5 12 8 6.5h11A1.5 1.5 0 0 1 20.5 8v8a1.5 1.5 0 0 1-1.5 1.5H8Z" }],
    ["circle", { cx: 8.25, cy: 12, r: 1 }],
    ["path", { d: "M13.25 10.25 15 9v6", ...SOLID_STROKE }],
  ],
};

export default VersionIcon;
