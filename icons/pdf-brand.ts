import type { Icon } from "../types";
import { SOLID } from "../system";

/** RunSnip PDF: a fixed page, its corner folded, in the brand frame. From the brand set. */
export const PdfBrandIcon: Icon = {
  name: "PdfBrandIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
    ["path", { d: "M7.5 6.5h5.5l3.5 3.5v7.5h-9Z" }],
    ["path", { d: "M12.5 6.5v4h4Z", ...SOLID }],
  ],
};

export default PdfBrandIcon;
