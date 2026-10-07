import type { Icon } from "../types";
import { SOLID } from "../system";

/** Plop, the micro-generator: a drop falling into its ripple, the drop the mark. From the files set. */
export const PlopIcon: Icon = {
  name: "PlopIcon",
  node: [
    ["ellipse", { cx: 12, cy: 16.5, rx: 8.5, ry: 4 }],
    ["path", { d: "M12 3.5c-1.5 2.2-3 3.9-3 5.5a3 3 0 0 0 6 0c0-1.6-1.5-3.3-3-5.5Z", ...SOLID }],
  ],
};

export default PlopIcon;
