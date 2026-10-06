import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Clear formatting: the letter T with a small cross, its formatting removed. From the text set. */
export const ClearFormattingIcon: Icon = {
  name: "ClearFormattingIcon",
  node: [["path", { d: "M4.5 5h12M10.5 5v14.5" }], ["path", { d: "M14.5 14.5l5 5M19.5 14.5l-5 5", ...SOLID_STROKE }]],
};

export default ClearFormattingIcon;
