import type { Icon } from "../types";
import { SOLID } from "../system";

/** %. From the sheets set. */
export const PercentIcon: Icon = {
  name: "PercentIcon",
  node: [
    ["path", { d: "M18 5 6 19" }],
    ["circle", { cx: 7, cy: 7, r: 2.4, ...SOLID }],
    ["circle", { cx: 17, cy: 17, r: 2.4, ...SOLID }],
  ],
};

export default PercentIcon;
