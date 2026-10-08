import type { Icon } from "../types";
import { SOLID } from "../system";

/** Graphcool: a hexagon crossed by an edge to a node, the node the mark. From the files set. */
export const GraphcoolIcon: Icon = {
  name: "GraphcoolIcon",
  node: [
    ["path", { d: "M12 3.5l7.5 4.25v8.5L12 20.5l-7.5-4.25v-8.5Z" }],
    ["path", { d: "M8.5 15l5.5-4.5" }],
    ["circle", { cx: 15, cy: 9.5, r: 1.75, ...SOLID }],
  ],
};

export default GraphcoolIcon;
