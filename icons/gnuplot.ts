import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** gnuplot: two axes, the plotted curve the mark. From the files set. */
export const GnuplotIcon: Icon = {
  name: "GnuplotIcon",
  node: [
    ["path", { d: "M4.5 3.5v16h16" }],
    ["path", { d: "M7.5 15.5c2-6 4.5-6 6-2.5s3 2 5.5-5", ...SOLID_STROKE }],
  ],
};

export default GnuplotIcon;
