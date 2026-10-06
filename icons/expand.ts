import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Expand: arrows pointing outward. From the collab set. */
export const ExpandIcon: Icon = {
  name: "ExpandIcon",
  node: [
    ["path", { d: "M14 10 19.5 4.5M10 14 4.5 19.5" }],
    ["path", { d: "M14.5 4.5h5v5M9.5 19.5h-5v-5", ...SOLID_STROKE }],
  ],
};

export default ExpandIcon;
