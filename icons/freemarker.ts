import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** FreeMarker: a directive's opening <#, the hash the mark. From the files set. */
export const FreemarkerIcon: Icon = {
  name: "FreemarkerIcon",
  node: [
    ["path", { d: "M8 7.5 3.5 12 8 16.5" }],
    ["path", { d: "M13.5 6.5v11M17.5 6.5v11M10.5 10h10M10.5 14h10", ...SOLID_STROKE }],
  ],
};

export default FreemarkerIcon;
