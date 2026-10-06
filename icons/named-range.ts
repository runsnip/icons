import type { Icon } from "../types";
import { SOLID } from "../system";

/** A cell range with a tag. From the sheets set. */
export const NamedRangeIcon: Icon = {
  name: "NamedRangeIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 13, height: 10, rx: 1.5 }],
    ["path", { d: "M10 3.5v10M3.5 8.5h13" }],
    ["path", { d: "M10 15.5h7l3.5 2.5-3.5 2.5h-7Z", ...SOLID }],
  ],
};

export default NamedRangeIcon;
