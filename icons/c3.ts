import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** C3: the letters C3, the mark, in a square. From the files set. */
export const C3Icon: Icon = {
  name: "C3Icon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M10.5 9.13A3.5 3.5 0 1 0 10.5 14.87M13 8.5h3.8l-2.3 3a2.3 2.3 0 1 1-1.8 3.9", ...SOLID_STROKE }],
  ],
};

export default C3Icon;
