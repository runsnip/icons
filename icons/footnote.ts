import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A footnote: text with a small raised 1, and a note under a rule at the foot. From the insert set. */
export const FootnoteIcon: Icon = {
  name: "FootnoteIcon",
  node: [
    ["path", { d: "M3.5 6.5h9M3.5 10.5h17M3.5 15h5M3.5 19.5h12" }],
    ["path", { d: "M16 5 18 3.5v6", ...SOLID_STROKE }],
  ],
};

export default FootnoteIcon;
