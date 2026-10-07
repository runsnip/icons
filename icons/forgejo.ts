import type { Icon } from "../types";
import { SOLID } from "../system";

/** Forgejo: two branches from one root, their three ends the mark. From the files set. */
export const ForgejoIcon: Icon = {
  name: "ForgejoIcon",
  node: [
    ["path", { d: "M7 16V10.5A4.5 4.5 0 0 1 11.5 6h4M7 12.5A2.5 2.5 0 0 0 9.5 15h6" }],
    ["circle", { cx: 7, cy: 18.25, r: 2.25, ...SOLID }],
    ["circle", { cx: 17.75, cy: 6, r: 2.25, ...SOLID }],
    ["circle", { cx: 17.75, cy: 15, r: 2.25, ...SOLID }],
  ],
};

export default ForgejoIcon;
