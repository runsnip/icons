import type { Icon } from "../types";
import { SOLID } from "../system";

/** Helm: a ship's wheel, its hub the mark. From the files set. */
export const HelmIcon: Icon = {
  name: "HelmIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 5.5 }],
    ["path", { d: "M17.08 14.1L19.85 15.25M14.1 17.08L15.25 19.85M9.9 17.08L8.75 19.85M6.92 14.1L4.15 15.25M6.92 9.9L4.15 8.75M9.9 6.92L8.75 4.15M14.1 6.92L15.25 4.15M17.08 9.9L19.85 8.75" }],
    ["circle", { cx: 12, cy: 12, r: 2, ...SOLID }],
  ],
};

export default HelmIcon;
