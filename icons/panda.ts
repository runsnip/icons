import type { Icon } from "../types";
import { SOLID } from "../system";

/** Panda CSS: a panda's face, its ears and eye patches the mark. From the files set. */
export const PandaIcon: Icon = {
  name: "PandaIcon",
  node: [
    ["circle", { cx: 12, cy: 13, r: 7.5 }],
    ["path", { d: "M11 17h2" }],
    ["circle", { cx: 6, cy: 6, r: 2, ...SOLID }],
    ["circle", { cx: 18, cy: 6, r: 2, ...SOLID }],
    ["circle", { cx: 9.3, cy: 12.5, r: 2, ...SOLID }],
    ["circle", { cx: 14.7, cy: 12.5, r: 2, ...SOLID }],
  ],
};

export default PandaIcon;
