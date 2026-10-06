import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A funnel crossed. From the sheets set. */
export const FilterOffIcon: Icon = {
  name: "FilterOffIcon",
  node: [
    ["path", { d: "M3.5 4.5h17L14 12.5v8l-4-2v-6Z" }],
    ["path", { d: "M4 4 20 20", ...SOLID_STROKE }],
  ],
};

export default FilterOffIcon;
