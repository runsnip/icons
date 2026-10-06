import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Horizontal rule: a line across, with text lines above and below. From the text set. */
export const HorizontalRuleIcon: Icon = {
  name: "HorizontalRuleIcon",
  node: [["path", { d: "M7 6h10M7 18h10" }], ["path", { d: "M3.5 12h17", ...SOLID_STROKE }]],
};

export default HorizontalRuleIcon;
