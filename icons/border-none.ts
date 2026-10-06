import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Every border dotted (none). From the sheets set. */
export const BorderNoneIcon: Icon = {
  name: "BorderNoneIcon",
  node: [
    ["path", { d: "M4 4h16M4 20h16M4 4v16M20 4v16M12 4v16M4 12h16", "stroke-dasharray": "0 4", ...SOLID_STROKE }],
  ],
};

export default BorderNoneIcon;
