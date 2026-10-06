import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Paragraph spacing: two blocks of lines with the gap between marked. From the text set. */
export const ParagraphSpacingIcon: Icon = {
  name: "ParagraphSpacingIcon",
  node: [["path", { d: "M11 4.5h9.5M11 8h9.5M11 16h9.5M11 19.5h9.5M6 8v8" }], ["path", { d: "M4 10 6 8l2 2M4 14l2 2 2-2", ...SOLID_STROKE }]],
};

export default ParagraphSpacingIcon;
