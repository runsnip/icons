import type { Icon } from "../types";
import { SOLID } from "../system";

/** Quokka.js: a quokka's face, its nose the mark. From the files set. */
export const QuokkaIcon: Icon = {
  name: "QuokkaIcon",
  node: [
    ["circle", { cx: 6.5, cy: 6, r: 2.5 }],
    ["circle", { cx: 17.5, cy: 6, r: 2.5 }],
    ["circle", { cx: 12, cy: 13.5, r: 7 }],
    ["circle", { cx: 12, cy: 15, r: 1.8, ...SOLID }],
  ],
};

export default QuokkaIcon;
