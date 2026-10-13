import type { Icon } from "../types";
import { SOLID } from "../system";

/** A graph: nodes and the edges between them, one node solid. From the ops set. */
export const GraphIcon: Icon = {
  name: "GraphIcon",
  node: [
    ["circle", { cx: 6, cy: 6, r: 2.5 }],
    ["circle", { cx: 18, cy: 7.5, r: 2.5 }],
    ["circle", { cx: 17, cy: 17.5, r: 2.5 }],
    ["path", { d: "M8.48 6.31 15.52 7.19M6.1 8.5 6.4 15.5M9 17.88 14.5 17.62M16.15 9.18 8.35 16.32" }],
    ["circle", { cx: 6.5, cy: 18, r: 2.5, ...SOLID }],
  ],
};

export default GraphIcon;
