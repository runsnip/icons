import type { Icon } from "../types";
import { SOLID } from "../system";

/** CircleCI: a ring open at the left round its centre, the centre the mark. From the files set. */
export const CircleciIcon: Icon = {
  name: "CircleciIcon",
  node: [
    ["path", { d: "M4.2 9.2A8.3 8.3 0 1 1 4.2 14.8" }],
    ["circle", { cx: 12, cy: 12, r: 3, ...SOLID }],
  ],
};

export default CircleciIcon;
