import type { Icon } from "../types";
import { SOLID } from "../system";

/** A PDF: a fixed page, its folded corner the mark. From the files set. */
export const PdfIcon: Icon = {
  name: "PdfIcon",
  node: [
    ["path", { d: "M14 3.5H5.5v17h13V8" }],
    ["path", { d: "M13.5 3.5 19 9h-5.5Z", ...SOLID }],
    ["path", { d: "M8.5 13h7M8.5 16.5h5" }],
  ],
};

export default PdfIcon;
