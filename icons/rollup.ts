import type { Icon } from "../types";
import { SOLID } from "../system";

/** Rollup: three modules rolled up into one filled bundle. From the files set. */
export const RollupIcon: Icon = {
  name: "RollupIcon",
  node: [
    ["path", { d: "M4.5 4.5 10 11M12 3.5V11M19.5 4.5 14 11" }],
    ["rect", { x: 8, y: 13, width: 8, height: 7, rx: 1.5, ...SOLID }],
  ],
};

export default RollupIcon;
