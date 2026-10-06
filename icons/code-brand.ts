import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** RunSnip Code: code's brackets, the slash between them the mark, in the brand frame. From the brand set. */
export const CodeBrandIcon: Icon = {
  name: "CodeBrandIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
    ["path", { d: "M9.5 8.5 6.5 12l3 3.5M14.5 8.5l3 3.5-3 3.5" }],
    ["path", { d: "M13 7.5l-2 9", ...SOLID_STROKE }],
  ],
};

export default CodeBrandIcon;
