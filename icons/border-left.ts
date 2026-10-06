import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** The left border emphasised. From the sheets set. */
export const BorderLeftIcon: Icon = {
  name: "BorderLeftIcon",
  node: [
    ["path", { d: "M4 4h16M4 20h16M20 4v16M12 4v16M4 12h16", "stroke-dasharray": "0 4" }],
    ["path", { d: "M4 4v16", ...SOLID_STROKE }],
  ],
};

export default BorderLeftIcon;
