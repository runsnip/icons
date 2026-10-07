import type { Icon } from "../types";
import { SOLID } from "../system";

/** D: the letter D, its moon solid. From the files set. */
export const DIcon: Icon = {
  name: "DIcon",
  node: [
    ["path", { d: "M4.5 6h4.5a6.5 6.5 0 0 1 0 13H4.5Z" }],
    ["circle", { cx: 18.5, cy: 5.5, r: 2, ...SOLID }],
  ],
};

export default DIcon;
