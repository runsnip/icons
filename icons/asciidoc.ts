import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A thickened A beside lines of text: AsciiDoc. From the files set. */
export const AsciidocIcon: Icon = {
  name: "AsciidocIcon",
  node: [
    ["path", { d: "M14.5 8h6M14.5 12h6M14.5 16h6" }],
    ["path", { d: "M4 17.5 8 6.5l4 11M5.4 14h5.2", ...SOLID_STROKE }],
  ],
};

export default AsciidocIcon;
