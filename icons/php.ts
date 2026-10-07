import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** PHP: the language's oval, the P inside it the mark. From the files set. */
export const PhpIcon: Icon = {
  name: "PhpIcon",
  node: [
    ["ellipse", { cx: 12, cy: 12, rx: 8.5, ry: 6 }],
    ["path", { d: "M10 15.5v-7h2.5a2 2 0 0 1 0 4H10", ...SOLID_STROKE }],
  ],
};

export default PhpIcon;
