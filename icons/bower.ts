import type { Icon } from "../types";
import { SOLID } from "../system";

/** Bower: a bird's head and beak, the eye the mark. From the files set. */
export const BowerIcon: Icon = {
  name: "BowerIcon",
  node: [
    ["circle", { cx: 11, cy: 12, r: 7 }],
    ["path", { d: "M17.6 9.8 20.5 11.8 17.8 13.6" }],
    ["circle", { cx: 12.5, cy: 9.8, r: 1.6, ...SOLID }],
  ],
};

export default BowerIcon;
