import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Dependency updates: a dependency graph, the arrow lifting it the mark. From the files set. */
export const DependenciesUpdateIcon: Icon = {
  name: "DependenciesUpdateIcon",
  node: [
    ["circle", { cx: 6.5, cy: 6.5, r: 2.5 }],
    ["circle", { cx: 6.5, cy: 17.5, r: 2.5 }],
    ["circle", { cx: 17.5, cy: 17.5, r: 2.5 }],
    ["path", { d: "M6.5 9v6M9 17.5h6M17.5 14V4.5" }],
    ["path", { d: "M14.5 7.5l3-3 3 3", ...SOLID_STROKE }],
  ],
};

export default DependenciesUpdateIcon;
