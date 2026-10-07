import type { Icon } from "../types";
import { SOLID } from "../system";

/** PowerPoint: a pie with a slice drawn out, the slice the mark. From the files set. */
export const PowerpointIcon: Icon = {
  name: "PowerpointIcon",
  node: [
    ["path", { d: "M11 6.5a7 7 0 1 0 7 7h-7Z" }],
    ["path", { d: "M13.5 4.5a7 7 0 0 1 7 7h-7Z", ...SOLID }],
  ],
};

export default PowerpointIcon;
