import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** RunSnip Docx: lines of text with the caret writing on, in the brand frame. From the brand set. */
export const DocxBrandIcon: Icon = {
  name: "DocxBrandIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
    ["path", { d: "M7.5 8.5h9M7.5 12h9M7.5 15.5h4.5" }],
    ["path", { d: "M15 14v3", ...SOLID_STROKE }],
  ],
};

export default DocxBrandIcon;
