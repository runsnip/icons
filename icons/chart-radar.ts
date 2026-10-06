import type { Icon } from "../types";
import { SOLID } from "../system";

/** A radar / spider web. From the sheets set. */
export const ChartRadarIcon: Icon = {
  name: "ChartRadarIcon",
  node: [
    ["path", { d: "M12 3.5l8 5.8-3 9.4H7L4 9.3Z" }],
    ["path", { d: "M12 8l4.5 2.5-2 5.5h-4.5L8 10.5Z", ...SOLID }],
  ],
};

export default ChartRadarIcon;
