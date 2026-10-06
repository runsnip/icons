import type { Icon } from "../types";
import { SOLID } from "../system";

/** A funnel. From the sheets set. */
export const FilterIcon: Icon = {
  name: "FilterIcon",
  node: [
    ["path", { d: "M3.5 4.5h17L14 12.5h-4Z" }],
    ["rect", { x: 10, y: 12, width: 4, height: 8.5, rx: 1, ...SOLID }],
  ],
};

export default FilterIcon;
