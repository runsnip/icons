import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Riot: a slanted r in a square, its arm the mark. From the files set. */
export const RiotIcon: Icon = {
  name: "RiotIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M9.5 17 11.8 7.5" }],
    ["path", { d: "M11 10.8c1-2 2.6-3 4.8-3", ...SOLID_STROKE }],
  ],
};

export default RiotIcon;
