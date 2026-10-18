import type { Icon } from "../types";
import { SOLID } from "../system";

/** RunSnip Twin: a character and its twin side by side, the twin the mark, in the brand frame. From the brand set. */
export const TwinBrandIcon: Icon = {
  name: "TwinBrandIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
    ["circle", { cx: 9.25, cy: 10, r: 2.25 }],
    ["path", { d: "M5.75 17a3.5 3.5 0 0 1 5.75-2.68" }],
    ["path", { d: "M14.75 7.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 1 0 0-4.5ZM11.25 17a3.5 3.5 0 0 1 7 0Z", ...SOLID }],
  ],
};

export default TwinBrandIcon;
