import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** ReasonML: the letters RE in a square, the letters the mark. From the files set. */
export const ReasonIcon: Icon = {
  name: "ReasonIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M7.5 17v-8h2.7a2.3 2.3 0 0 1 0 4.6H7.5M10.3 13.6 12 17M17 9h-3.5v8H17M13.5 13h3", ...SOLID_STROKE }],
  ],
};

export default ReasonIcon;
