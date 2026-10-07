import type { Icon } from "../types";
import { SOLID } from "../system";

/** Bun: a round bun with a face, the eyes the mark. From the files set. */
export const BunIcon: Icon = {
  name: "BunIcon",
  node: [
    ["ellipse", { cx: 12, cy: 13, rx: 8.5, ry: 6.5 }],
    ["path", { d: "M10.5 15.2a1.5 1.5 0 0 0 3 0M9 7.5c1 1 2 1 3 0" }],
    ["circle", { cx: 9, cy: 12.5, r: 1.3, ...SOLID }],
    ["circle", { cx: 15, cy: 12.5, r: 1.3, ...SOLID }],
  ],
};

export default BunIcon;
