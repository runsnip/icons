import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Collapse: arrows pointing inward. From the collab set. */
export const CollapseIcon: Icon = {
  name: "CollapseIcon",
  node: [
    ["path", { d: "M19.5 4.5 14.5 9.5M4.5 19.5 9.5 14.5" }],
    ["path", { d: "M14.5 5v4.5H19M9.5 19v-4.5H5", ...SOLID_STROKE }],
  ],
};

export default CollapseIcon;
