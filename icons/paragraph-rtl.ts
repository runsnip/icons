import type { Icon } from "../types";
import { SOLID } from "../system";

/** Right-to-left text direction: ParagraphLtrIcon mirrored — the reversed paragraph mark, lines before it, an arrow pointing left. From the text set. */
export const ParagraphRtlIcon: Icon = {
  name: "ParagraphRtlIcon",
  node: [
    ["path", { d: "M11 12V3.5h6.25a2.75 2.75 0 0 1 0 5.5H14.5M14.5 3.5V12" }],
    ["path", { d: "M7.5 4.5h-4M7.5 8.25h-4M7.5 12h-4M20.5 17H9" }],
    ["path", { d: "M9 13.5 3.5 17 9 20.5Z", ...SOLID }],
  ],
};

export default ParagraphRtlIcon;
