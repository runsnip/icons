import type { Icon } from "../types";
import { SOLID } from "../system";

/** Left-to-right text direction: a paragraph mark with lines after it, over an arrow pointing right. From the text set. */
export const ParagraphLtrIcon: Icon = {
  name: "ParagraphLtrIcon",
  node: [
    ["path", { d: "M13 12V3.5H6.75a2.75 2.75 0 0 0 0 5.5H9.5M9.5 3.5V12" }],
    ["path", { d: "M16.5 4.5h4M16.5 8.25h4M16.5 12h4M3.5 17H15" }],
    ["path", { d: "M15 13.5 20.5 17 15 20.5Z", ...SOLID }],
  ],
};

export default ParagraphLtrIcon;
