import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Z→A with a down arrow. From the sheets set. */
export const SortDescendingIcon: Icon = {
  name: "SortDescendingIcon",
  node: [
    ["path", { d: "M3.5 3.5h6l-6 7h6M3.5 20.5l3-7 3 7M4.7 18h3.6M16.5 3.5v16" }],
    ["path", { d: "M13 16l3.5 3.5L20 16", ...SOLID_STROKE }],
  ],
};

export default SortDescendingIcon;
