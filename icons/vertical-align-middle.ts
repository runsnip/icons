import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Arrows meeting at a middle bar. From the sheets set. */
export const VerticalAlignMiddleIcon: Icon = {
  name: "VerticalAlignMiddleIcon",
  node: [
    ["path", { d: "M3.5 12h17", ...SOLID_STROKE }],
    ["path", { d: "M12 3.5v5.5M9 6.5l3 3 3-3M12 20.5V15M9 17.5l3-3 3 3" }],
  ],
};

export default VerticalAlignMiddleIcon;
