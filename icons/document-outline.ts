import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A document with an outline tree. From the pdf set. */
export const DocumentOutlineIcon: Icon = {
  name: "DocumentOutlineIcon",
  node: [
    ["path", { d: "M14 3.5H7A2.5 2.5 0 0 0 4.5 6v12A2.5 2.5 0 0 0 7 20.5h10a2.5 2.5 0 0 0 2.5-2.5V9Z" }],
    ["path", { d: "M8 10h5", ...SOLID_STROKE }],
    ["path", { d: "M8.5 13v4M11.5 13h4M11.5 17h4" }],
  ],
};

export default DocumentOutlineIcon;
