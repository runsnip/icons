import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** PHPStan: PHP's oval as a lens, the handle that makes it a magnifier the mark. From the files set. */
export const PhpstanIcon: Icon = {
  name: "PhpstanIcon",
  node: [
    ["ellipse", { cx: 10, cy: 10, rx: 6.5, ry: 4.75 }],
    ["path", { d: "M15 13.5 19.5 19", ...SOLID_STROKE }],
  ],
};

export default PhpstanIcon;
