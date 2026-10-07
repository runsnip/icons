import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Stryker: a mutating strand, its rungs the mark. From the files set. */
export const StrykerIcon: Icon = {
  name: "StrykerIcon",
  node: [
    ["path", { d: "M7 4.5c0 6 10 9 10 15M17 4.5c0 6-10 9-10 15" }],
    ["path", { d: "M8.5 7.5h7M8.5 16.5h7", ...SOLID_STROKE }],
  ],
};

export default StrykerIcon;
