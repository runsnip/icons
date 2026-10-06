import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A slide with a slash. From the slides set. */
export const HideSlideIcon: Icon = {
  name: "HideSlideIcon",
  node: [
    ["rect", { x: 3.5, y: 5, width: 17, height: 14, rx: 2 }],
    ["path", { d: "M4.5 20.5 19.5 3.5", ...SOLID_STROKE }],
  ],
};

export default HideSlideIcon;
