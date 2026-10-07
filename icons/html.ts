import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** HTML: the shield of HTML5, its 5 the mark. From the files set. */
export const HtmlIcon: Icon = {
  name: "HtmlIcon",
  node: [
    ["path", { d: "M4.5 3.5h15l-1.5 14-6 3-6-3Z" }],
    ["path", { d: "M15 7.5H9.5l.4 4H14.5v3.2L12 15.8l-2.5-1.1", ...SOLID_STROKE }],
  ],
};

export default HtmlIcon;
