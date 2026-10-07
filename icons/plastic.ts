import type { Icon } from "../types";
import { SOLID } from "../system";

/** Plastic SCM: a main line with a branch leaving it, the branch's head the mark. From the files set. */
export const PlasticIcon: Icon = {
  name: "PlasticIcon",
  node: [
    ["path", { d: "M6.5 3.5v17M6.5 16.5c0-5 11-3.5 11-6.5" }],
    ["circle", { cx: 17.5, cy: 7, r: 2.5, ...SOLID }],
  ],
};

export default PlasticIcon;
