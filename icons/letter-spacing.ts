import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Letter spacing: letters with a spaced double arrow beneath. From the text set. */
export const LetterSpacingIcon: Icon = {
  name: "LetterSpacingIcon",
  node: [["path", { d: "M4 13 7.5 4l3.5 9M5.2 10h4.6M13 4l3.5 9L20 4M4 18.5h16" }], ["path", { d: "M6 16.5 4 18.5l2 2M18 16.5l2 2-2 2", ...SOLID_STROKE }]],
};

export default LetterSpacingIcon;
