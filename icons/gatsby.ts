import type { Icon } from "../types";
import { SOLID } from "../system";

/** Gatsby: a circle cut by its G, the lower wedge the mark. From the files set. */
export const GatsbyIcon: Icon = {
  name: "GatsbyIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M13 12h7.5" }],
    ["path", { d: "M3.6 13.1 10.9 20.4A8.5 8.5 0 0 1 3.6 13.1Z", ...SOLID }],
  ],
};

export default GatsbyIcon;
