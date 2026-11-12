import type { Icon } from "../types";
import { SOLID } from "../system";

/**
 * Solver: a feasible region — the polygon the constraints leave — with an arrow inside it pointing to its best corner,
 * and that corner, the optimum, as the one solid motif. The textbook picture of finding the best value under
 * constraints. An irregular quadrilateral rather than a peaked one, so it does not read as a house; drawn as a region
 * and a point rather than on axes, so it reads apart from the chart marks and TargetIcon. From the sheets set.
 */
export const SolverIcon: Icon = {
  name: "SolverIcon",
  node: [
    ["path", { d: "M3.5 20.5V10.5L16 6l4.5 14.5Z" }],
    ["path", { d: "M8 16l5-6.25M10 10.1l3-.35.3 2.95" }],
    ["circle", { cx: 16, cy: 6, r: 2.5, ...SOLID }],
  ],
};

export default SolverIcon;
