import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Justify: lines all of equal length between two edges. From the text set. */
export const AlignJustifyIcon: Icon = {
  name: "AlignJustifyIcon",
  node: [["path", { d: "M4 4v16M20 4v16", ...SOLID_STROKE }], ["path", { d: "M8 7h8M8 12h8M8 17h8" }]],
};

export default AlignJustifyIcon;
