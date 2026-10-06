import type { Icon } from "../types";
import { SOLID } from "../system";

/** A filled area chart. From the sheets set. */
export const ChartAreaIcon: Icon = {
  name: "ChartAreaIcon",
  node: [
    ["path", { d: "M3.5 3.5v17h17" }],
    ["path", { d: "M7 17v-3.5l4-4.5 3.5 3L20 6.5V17Z", ...SOLID }],
  ],
};

export default ChartAreaIcon;
