import type { Icon } from "../types";
import { SOLID } from "../system";

/** Lighthouse: a lighthouse, its lantern the mark. From the files set. */
export const LighthouseIcon: Icon = {
  name: "LighthouseIcon",
  node: [
    ["path", { d: "M9.5 10h5l1.5 10.5H8ZM4.5 20.5h15M3.5 5l3 1.5M20.5 5l-3 1.5" }],
    ["rect", { x: 9.5, y: 3.5, width: 5, height: 4.5, rx: 1, ...SOLID }],
  ],
};

export default LighthouseIcon;
