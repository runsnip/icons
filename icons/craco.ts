import type { Icon } from "../types";
import { SOLID } from "../system";

/** CRACO: an orbit with its nucleus, a line through it for the override. From the files set. */
export const CracoIcon: Icon = {
  name: "CracoIcon",
  node: [
    ["ellipse", { cx: 12, cy: 12, rx: 8.5, ry: 4 }],
    ["path", { d: "M12 3.5v5.5M12 15v5.5" }],
    ["circle", { cx: 12, cy: 12, r: 2.2, ...SOLID }],
  ],
};

export default CracoIcon;
