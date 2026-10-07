import type { Icon } from "../types";
import { SOLID } from "../system";

/** CSS: a rule's braces round a solid box. From the files set. */
export const CssIcon: Icon = {
  name: "CssIcon",
  node: [
    ["path", { d: "M7.5 4.5H6.5A1.5 1.5 0 0 0 5 6V10.5L3.5 12L5 13.5V18A1.5 1.5 0 0 0 6.5 19.5H7.5M16.5 4.5H17.5A1.5 1.5 0 0 1 19 6V10.5L20.5 12L19 13.5V18A1.5 1.5 0 0 1 17.5 19.5H16.5" }],
    ["rect", { x: 9.5, y: 9.5, width: 5, height: 5, rx: 1, ...SOLID }],
  ],
};

export default CssIcon;
