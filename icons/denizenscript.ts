import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** DenizenScript: a squared D and S, the S the mark. From the files set. */
export const DenizenscriptIcon: Icon = {
  name: "DenizenscriptIcon",
  node: [
    ["path", { d: "M4 6h3.5A3.5 3.5 0 0 1 11 9.5v5A3.5 3.5 0 0 1 7.5 18H4Z" }],
    ["path", { d: "M20 6h-6v6h6v6h-6", ...SOLID_STROKE }],
  ],
};

export default DenizenscriptIcon;
