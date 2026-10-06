import type { Icon } from "../types";
import { SOLID } from "../system";

/** A screen with a play triangle. From the slides set. */
export const PresentIcon: Icon = {
  name: "PresentIcon",
  node: [
    ["rect", { x: 3.5, y: 5, width: 17, height: 14, rx: 2 }],
    ["path", { d: "M10 8.5v7l6-3.5Z", ...SOLID }],
  ],
};

export default PresentIcon;
