import type { Icon } from "../types";
import { SOLID } from "../system";

/** Stylus: a written S, the pen's dot the mark. From the files set. */
export const StylusIcon: Icon = {
  name: "StylusIcon",
  node: [
    ["path", { d: "M18.5 6.5C16 4.5 8.5 4.5 8.5 8.5s10 3 10 7.5S11 20.5 7 18" }],
    ["circle", { cx: 5.5, cy: 17, r: 2, ...SOLID }],
  ],
};

export default StylusIcon;
