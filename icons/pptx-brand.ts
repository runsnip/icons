import type { Icon } from "../types";
import { SOLID } from "../system";

/** RunSnip Pptx: a slide with a shape on it, in the brand frame. From the brand set. */
export const PptxBrandIcon: Icon = {
  name: "PptxBrandIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
    ["rect", { x: 7, y: 7.5, width: 10, height: 7, rx: 1 }],
    ["path", { d: "M12 14.5v3.5M9.5 18h5" }],
    ["rect", { x: 9.5, y: 9.75, width: 3, height: 2.5, rx: 0.75, ...SOLID }],
  ],
};

export default PptxBrandIcon;
