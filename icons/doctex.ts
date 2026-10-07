import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Documented TeX sources: TeX's backslash beside lines of documentation, the backslash the mark. From the files set. */
export const DoctexIcon: Icon = {
  name: "DoctexIcon",
  node: [
    ["path", { d: "M4.5 5l5.5 14", ...SOLID_STROKE }],
    ["path", { d: "M13.5 7h7M13.5 12h7M13.5 17h5" }],
  ],
};

export default DoctexIcon;
