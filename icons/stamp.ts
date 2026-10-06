import type { Icon } from "../types";
import { SOLID } from "../system";

/** A rubber stamp. From the pdf set. */
export const StampIcon: Icon = {
  name: "StampIcon",
  node: [
    ["circle", { cx: 12, cy: 6.5, r: 3 }],
    ["path", { d: "M10.5 9.5V13M13.5 9.5V13" }],
    ["rect", { x: 4.5, y: 13, width: 15, height: 3.5, rx: 1, ...SOLID }],
    ["path", { d: "M6 20h12" }],
  ],
};

export default StampIcon;
