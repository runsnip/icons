import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A class: a class-diagram box, its name the mark. From the files set. */
export const ClassIcon: Icon = {
  name: "ClassIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 2.5 }],
    ["path", { d: "M3.5 10h17M7.5 13.75h6M7.5 17h9" }],
    ["path", { d: "M8 6.75h8", ...SOLID_STROKE }],
  ],
};

export default ClassIcon;
