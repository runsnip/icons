import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A dotted grid. From the sheets set. */
export const GridlinesIcon: Icon = {
  name: "GridlinesIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 2 }],
    ["path", { d: "M9.17 3.5v17M14.83 3.5v17M3.5 9.17h17M3.5 14.83h17", "stroke-dasharray": "0 2.833", ...SOLID_STROKE }],
  ],
};

export default GridlinesIcon;
