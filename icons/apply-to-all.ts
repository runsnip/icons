import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/**
 * Apply to all: TransitionIcon's slide and arrow, with the arrow landing on a stack of slides instead of on one — the
 * current slide's setting given to every slide. The stack is a back edge over a front slide, as ExtractPagesIcon draws
 * more than one page. The arrow is the one thickened motif, as in TransitionIcon. A stack under an arrow, not two
 * overlapping sheets, so it does not read as copy or duplicate. From the slides set.
 */
export const ApplyToAllIcon: Icon = {
  name: "ApplyToAllIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 9, height: 6.5, rx: 1.5 }],
    ["path", { d: "M17 3.5V9M14.75 6.75 17 9l2.25-2.25", ...SOLID_STROKE }],
    ["path", { d: "M9.5 12.5h9" }],
    ["rect", { x: 7.5, y: 15.5, width: 13, height: 5, rx: 1.5 }],
  ],
};

export default ApplyToAllIcon;
