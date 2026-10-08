import type { Icon } from "../types";
import { SOLID } from "../system";

/** NgRx: a shield with a bird on it, its eye the mark. From the files set. */
export const NgrxIcon: Icon = {
  name: "NgrxIcon",
  node: [
    ["path", { d: "M12 3.5l7.5 2.5-1.2 10L12 20.5 5.7 16 4.5 6Z" }],
    ["path", { d: "M8 14c1.5-3 4-4.5 7.5-3.5-1.5.5-2.25 1.5-2.25 3 0 2-2.25 3-4.25 2.25" }],
    ["circle", { cx: 13.25, cy: 9.25, r: 1, ...SOLID }],
  ],
};

export default NgrxIcon;
