import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Only the inside lines drawn. From the sheets set. */
export const BorderInnerIcon: Icon = {
  name: "BorderInnerIcon",
  node: [
    ["path", { d: "M4 4h16M4 20h16M4 4v16M20 4v16", "stroke-dasharray": "0 4" }],
    ["path", { d: "M12 4v16M4 12h16", ...SOLID_STROKE }],
  ],
};

export default BorderInnerIcon;
