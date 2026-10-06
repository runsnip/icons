import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** The right border emphasised. From the sheets set. */
export const BorderRightIcon: Icon = {
  name: "BorderRightIcon",
  node: [
    ["path", { d: "M4 4h16M4 20h16M4 4v16M12 4v16M4 12h16", "stroke-dasharray": "0 4" }],
    ["path", { d: "M20 4v16", ...SOLID_STROKE }],
  ],
};

export default BorderRightIcon;
