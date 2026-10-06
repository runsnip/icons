import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A→Z with a down arrow. From the sheets set. */
export const SortAscendingIcon: Icon = {
  name: "SortAscendingIcon",
  node: [
    ["path", { d: "M3.5 10.5 6.5 3.5l3 7M4.7 8h3.6M3.5 13.5h6l-6 7h6M16.5 3.5v16" }],
    ["path", { d: "M13 16l3.5 3.5L20 16", ...SOLID_STROKE }],
  ],
};

export default SortAscendingIcon;
