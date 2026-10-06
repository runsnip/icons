import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A bar at the bottom with an arrow down to it. From the sheets set. */
export const VerticalAlignBottomIcon: Icon = {
  name: "VerticalAlignBottomIcon",
  node: [
    ["path", { d: "M3.5 20h17", ...SOLID_STROKE }],
    ["path", { d: "M12 3.5v12M8 11.5l4 4 4-4" }],
  ],
};

export default VerticalAlignBottomIcon;
