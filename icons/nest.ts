import type { Icon } from "../types";
import { SOLID } from "../system";

/** Nest: a nest with an egg in it, the egg the mark. From the files set. */
export const NestIcon: Icon = {
  name: "NestIcon",
  node: [
    ["path", { d: "M4 12.5h16a8 7 0 0 1-16 0Z" }],
    ["ellipse", { cx: 12, cy: 8, rx: 2.5, ry: 3.2, ...SOLID }],
  ],
};

export default NestIcon;
