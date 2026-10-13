import type { Icon } from "../types";
import { SOLID } from "../system";

/** A bracket: a term between parentheses. From the math set. */
export const EqBracketIcon: Icon = {
  name: "EqBracketIcon",
  node: [
    ["path", { d: "M7 3.5c-2.5 2.5-3.5 5.5-3.5 8.5s1 6 3.5 8.5M17 3.5c2.5 2.5 3.5 5.5 3.5 8.5s-1 6-3.5 8.5" }],
    ["rect", { x: 9, y: 9, width: 6, height: 6, rx: 1, ...SOLID }],
  ],
};

export default EqBracketIcon;
