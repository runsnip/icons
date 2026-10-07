import type { Icon } from "../types";
import { SOLID } from "../system";

/** An enumeration: a set's brackets round its solid members. From the files set. */
export const EnumIcon: Icon = {
  name: "EnumIcon",
  node: [
    ["path", { d: "M7 5H4v14h3M17 5h3v14h-3" }],
    ["circle", { cx: 8.75, cy: 12, r: 1.5, ...SOLID }],
    ["circle", { cx: 12, cy: 12, r: 1.5, ...SOLID }],
    ["circle", { cx: 15.25, cy: 12, r: 1.5, ...SOLID }],
  ],
};

export default EnumIcon;
