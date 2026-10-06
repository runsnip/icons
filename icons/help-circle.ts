import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Help: a question mark in a circle. From the collab set. */
export const HelpCircleIcon: Icon = {
  name: "HelpCircleIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M9.5 9.5a2.5 2.5 0 1 1 3.3 2.4c-.5.2-.8.7-.8 1.2V14M12 17.2h.01", ...SOLID_STROKE }],
  ],
};

export default HelpCircleIcon;
