import type { Icon } from "../types";
import { SOLID } from "../system";

/** Renovate: a paint roller, its roller filled. From the files set. */
export const RenovateIcon: Icon = {
  name: "RenovateIcon",
  node: [
    ["rect", { x: 4.5, y: 4.5, width: 12.5, height: 5, rx: 1.5, ...SOLID }],
    ["path", { d: "M17 7h2.5v5.5H12v8" }],
  ],
};

export default RenovateIcon;
