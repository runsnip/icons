import type { Icon } from "../types";
import { SOLID } from "../system";

/** Pug templates: a pug's face, its folded ears the mark. From the files set. */
export const PugIcon: Icon = {
  name: "PugIcon",
  node: [
    ["path", { d: "M6 10.5a6 6 0 0 1 12 0v4a6 6 0 0 1-12 0Z" }],
    ["path", { d: "M9.5 16.5a2.5 2 0 0 0 5 0M11 14h2" }],
    ["path", { d: "M8 5 3.5 6.5l1 5Z", ...SOLID }],
    ["path", { d: "M16 5l4.5 1.5-1 5Z", ...SOLID }],
  ],
};

export default PugIcon;
