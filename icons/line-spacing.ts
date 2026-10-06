import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Line spacing: lines beside a vertical double arrow. From the text set. */
export const LineSpacingIcon: Icon = {
  name: "LineSpacingIcon",
  node: [["path", { d: "M11.5 6h9M11.5 12h9M11.5 18h9M6 5.5v13" }], ["path", { d: "M3.5 7.5 6 5l2.5 2.5M3.5 16.5 6 19l2.5-2.5", ...SOLID_STROKE }]],
};

export default LineSpacingIcon;
