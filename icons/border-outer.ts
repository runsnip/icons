import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Only the outside border drawn. From the sheets set. */
export const BorderOuterIcon: Icon = {
  name: "BorderOuterIcon",
  node: [
    ["path", { d: "M12 4v16M4 12h16", "stroke-dasharray": "0 4" }],
    ["path", { d: "M4 4h16v16H4Z", ...SOLID_STROKE }],
  ],
};

export default BorderOuterIcon;
