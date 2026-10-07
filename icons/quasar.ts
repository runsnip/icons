import type { Icon } from "../types";
import { SOLID } from "../system";

/** Quasar: a ring with turning blades, its core the mark. From the files set. */
export const QuasarIcon: Icon = {
  name: "QuasarIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M12 8.5L20.21 9.8M15.031 13.75L9.8 20.21M8.969 13.75L5.99 5.99" }],
    ["circle", { cx: 12, cy: 12, r: 2.5, ...SOLID }],
  ],
};

export default QuasarIcon;
