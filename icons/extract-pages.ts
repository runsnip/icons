import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A page pulled out of a stack. From the pdf set. */
export const ExtractPagesIcon: Icon = {
  name: "ExtractPagesIcon",
  node: [
    ["path", { d: "M3.5 16.5v-11a2 2 0 0 1 2-2h11" }],
    ["rect", { x: 7.5, y: 7.5, width: 13, height: 13, rx: 2 }],
    ["path", { d: "M11 14h6M14.5 11.5 17 14l-2.5 2.5", ...SOLID_STROKE }],
  ],
};

export default ExtractPagesIcon;
