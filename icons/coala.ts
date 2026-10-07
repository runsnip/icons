import type { Icon } from "../types";
import { SOLID } from "../system";

/** coala: a koala's face, its nose the mark. From the files set. */
export const CoalaIcon: Icon = {
  name: "CoalaIcon",
  node: [
    ["path", { d: "M7.3 9.4A6 6 0 1 0 16.7 9.4" }],
    ["circle", { cx: 6, cy: 8, r: 2.5 }],
    ["circle", { cx: 18, cy: 8, r: 2.5 }],
    ["path", { d: "M8.5 6.6A6 6 0 0 1 15.5 6.6" }],
    ["ellipse", { cx: 12, cy: 14, rx: 1.8, ry: 2.5, ...SOLID }],
  ],
};

export default CoalaIcon;
