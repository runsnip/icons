import type { Icon } from "../types";
import { SOLID } from "../system";

/** Vitest: a check passed, with a bolt beside it, the bolt the mark. From the files set. */
export const VitestIcon: Icon = {
  name: "VitestIcon",
  node: [
    ["path", { d: "M4.5 13.5l5 5 10-11" }],
    ["polygon", { points: "10.5,3.5 5.5,9.5 8.5,9.5 7.5,13 12,7.5 9,7.5", ...SOLID }],
  ],
};

export default VitestIcon;
