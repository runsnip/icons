import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A slide with a plus. From the slides set. */
export const NewSlideIcon: Icon = {
  name: "NewSlideIcon",
  node: [
    ["rect", { x: 3.5, y: 5, width: 17, height: 14, rx: 2 }],
    ["path", { d: "M12 8.5v7M8.5 12h7", ...SOLID_STROKE }],
  ],
};

export default NewSlideIcon;
