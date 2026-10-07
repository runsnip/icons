import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Mint: a leaf, its midrib the mark. From the files set. */
export const MintIcon: Icon = {
  name: "MintIcon",
  node: [
    ["path", { d: "M4.5 19.5C4.5 10.5 10 4.5 19.5 4.5c0 9.5-6 15-15 15Z" }],
    ["path", { d: "M8.5 15.5l6-6", ...SOLID_STROKE }],
  ],
};

export default MintIcon;
