import type { Icon } from "../types";
import { SOLID, SOLID_STROKE } from "../system";

/** A fraction: two places for terms, the bar between them the mark. From the math set. */
export const EqFractionIcon: Icon = {
  name: "EqFractionIcon",
  node: [
    ["rect", { x: 8.5, y: 3.5, width: 7, height: 5.5, rx: 1 }],
    ["rect", { x: 8.5, y: 15, width: 7, height: 5.5, rx: 1 }],
    ["path", { d: "M5 12h14", ...SOLID_STROKE }],
  ],
};

export default EqFractionIcon;
