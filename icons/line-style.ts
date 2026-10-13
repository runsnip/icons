import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** A line's style: a solid line, a dashed one emphasised, a dotted one. From the insert set. */
export const LineStyleIcon: Icon = {
  name: "LineStyleIcon",
  node: [
    ["path", { d: "M3.5 5.5h17" }],
    ["path", { d: "M3.5 12h17", "stroke-dasharray": "3.5 3", ...SOLID_STROKE }],
    ["path", { d: "M3.5 18.5h17", "stroke-dasharray": "0 3.4" }],
  ],
};

export default LineStyleIcon;
