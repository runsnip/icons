import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** PHPUnit: PHP's oval, the tick of a passing test the mark. From the files set. */
export const PhpunitIcon: Icon = {
  name: "PhpunitIcon",
  node: [
    ["ellipse", { cx: 12, cy: 12, rx: 8.5, ry: 6 }],
    ["path", { d: "M8.5 12l2.5 2.5 4.5-5", ...SOLID_STROKE }],
  ],
};

export default PhpunitIcon;
