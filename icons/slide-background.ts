import type { Icon } from "../types";
import { SOLID } from "../system";

/** A slide with its ground filled. From the slides set. */
export const SlideBackgroundIcon: Icon = {
  name: "SlideBackgroundIcon",
  node: [
    ["rect", { x: 3.5, y: 5, width: 17, height: 14, rx: 2 }],
    ["rect", { x: 6.5, y: 8, width: 11, height: 8, rx: 1, ...SOLID }],
  ],
};

export default SlideBackgroundIcon;
