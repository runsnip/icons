import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Hardhat: a helmet, its brim the mark. From the files set. */
export const HardhatIcon: Icon = {
  name: "HardhatIcon",
  node: [
    ["path", { d: "M5 15.5a7 7 0 0 1 14 0M10.25 8.75v3M13.75 8.75v3" }],
    ["path", { d: "M3.5 15.5h17", ...SOLID_STROKE }],
  ],
};

export default HardhatIcon;
