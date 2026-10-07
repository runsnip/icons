import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Tcl: a feather, its quill the mark. From the files set. */
export const TclIcon: Icon = {
  name: "TclIcon",
  node: [
    ["path", { d: "M19.5 4.5C12 5 7 10 6.5 17.5 14 17 19 12 19.5 4.5Z" }],
    ["path", { d: "M4.5 19.5 13.5 10.5", ...SOLID_STROKE }],
  ],
};

export default TclIcon;
