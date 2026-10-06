import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A table of contents: entries led by dots to their page numbers. From the insert set. */
export const TableOfContentsIcon: Icon = {
  name: "TableOfContentsIcon",
  node: [
    ["path", { d: "M3.5 6h6M11.5 6h0M14 6h0M6.5 12h5M13.5 12h0M3.5 18h7M12.5 18h0M15 18h0" }],
    ["path", { d: "M17.5 6h3M17.5 12h3M17.5 18h3", ...SOLID_STROKE }],
  ],
};

export default TableOfContentsIcon;
