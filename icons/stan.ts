import type { Icon } from "../types";
import { SOLID } from "../system";

/** Stan: a bell curve over its axis, its peak the mark. From the files set. */
export const StanIcon: Icon = {
  name: "StanIcon",
  node: [
    ["path", { d: "M3.5 17.5C8 17.5 7.5 7.5 12 7.5s4 10 8.5 10" }],
    ["path", { d: "M3.5 20.5h17" }],
    ["circle", { cx: 12, cy: 7.5, r: 2.25, ...SOLID }],
  ],
};

export default StanIcon;
