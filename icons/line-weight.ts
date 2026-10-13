import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** A line's weight: three lines, thin to heavy. From the insert set. */
export const LineWeightIcon: Icon = {
  name: "LineWeightIcon",
  node: [
    ["path", { d: "M3.5 5.5h17", "stroke-width": 1 }],
    ["path", { d: "M3.5 11.5h17" }],
    ["path", { d: "M3.5 18h17", ...SOLID_STROKE }],
  ],
};

export default LineWeightIcon;
