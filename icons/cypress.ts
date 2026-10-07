import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Cypress: cy in a ring, the y the mark. From the files set. */
export const CypressIcon: Icon = {
  name: "CypressIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M11 10a2.5 2.5 0 1 0 0 4" }],
    ["path", { d: "M13 9.5l2.25 5M17.5 9.5l-3 7.5", ...SOLID_STROKE }],
  ],
};

export default CypressIcon;
