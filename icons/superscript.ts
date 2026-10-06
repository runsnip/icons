import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Superscript: an x with a small raised 2. From the text set. */
export const SuperscriptIcon: Icon = {
  name: "SuperscriptIcon",
  node: [["path", { d: "M4 9.5 11.5 19.5M11.5 9.5 4 19.5" }], ["path", { d: "M14.5 6a2.75 2.5 0 0 1 5.5.6c0 2-5.5 3.4-5.5 5.9H20", ...SOLID_STROKE }]],
};

export default SuperscriptIcon;
