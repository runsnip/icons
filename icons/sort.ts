import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Sort: an arrow up beside an arrow down. From the collab set. */
export const SortIcon: Icon = {
  name: "SortIcon",
  node: [
    ["path", { d: "M8 19.5V5.5M16 4.5V18.5" }],
    ["path", { d: "M4.5 8.5 8 5l3.5 3.5M12.5 15.5 16 19l3.5-3.5", ...SOLID_STROKE }],
  ],
};

export default SortIcon;
