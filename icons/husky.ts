import type { Icon } from "../types";
import { SOLID } from "../system";

/** Husky: a husky's head, its nose the mark. From the files set. */
export const HuskyIcon: Icon = {
  name: "HuskyIcon",
  node: [
    ["path", { d: "M5 11V4.5L9 8h6l4-3.5V11c0 5-3.5 8.5-7 9.5-3.5-1-7-4.5-7-9.5Z" }],
    ["path", { d: "M9.5 11.5h.01M14.5 11.5h.01" }],
    ["circle", { cx: 12, cy: 15.5, r: 1.6, ...SOLID }],
  ],
};

export default HuskyIcon;
