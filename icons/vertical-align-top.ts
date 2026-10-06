import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A bar at the top with an arrow up to it. From the sheets set. */
export const VerticalAlignTopIcon: Icon = {
  name: "VerticalAlignTopIcon",
  node: [
    ["path", { d: "M3.5 4h17", ...SOLID_STROKE }],
    ["path", { d: "M12 20.5V8.5M8 12.5l4-4 4 4" }],
  ],
};

export default VerticalAlignTopIcon;
