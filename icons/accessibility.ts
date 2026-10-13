import type { Icon } from "../types";
import { SOLID } from "../system";

/** Accessibility: a person, arms open, in a circle. From the ui set. */
export const AccessibilityIcon: Icon = {
  name: "AccessibilityIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["circle", { cx: 12, cy: 7.75, r: 1.5, ...SOLID }],
    ["path", { d: "M8 10.5l4 .75 4-.75M12 11.25v3M9.75 17.5 12 14.25l2.25 3.25" }],
  ],
};

export default AccessibilityIcon;
