import type { Icon } from "../types";
import { SOLID } from "../system";

/** Coconut: a coconut, its three eyes the mark. From the files set. */
export const CoconutIcon: Icon = {
  name: "CoconutIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["circle", { cx: 9.5, cy: 10, r: 1.5, ...SOLID }],
    ["circle", { cx: 14.5, cy: 10, r: 1.5, ...SOLID }],
    ["circle", { cx: 12, cy: 14.5, r: 1.5, ...SOLID }],
  ],
};

export default CoconutIcon;
