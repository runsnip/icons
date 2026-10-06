import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A page with a plus between pages. From the pdf set. */
export const InsertPageIcon: Icon = {
  name: "InsertPageIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 10, height: 6, rx: 1.5 }],
    ["rect", { x: 3.5, y: 14.5, width: 10, height: 6, rx: 1.5 }],
    ["path", { d: "M17.5 9.5v5M15 12h5", ...SOLID_STROKE }],
  ],
};

export default InsertPageIcon;
