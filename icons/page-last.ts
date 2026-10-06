import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A right chevron and a bar (last page). From the pdf set. */
export const PageLastIcon: Icon = {
  name: "PageLastIcon",
  node: [
    ["path", { d: "M17.5 5.5v13" }],
    ["path", { d: "M6.5 5.5 13 12l-6.5 6.5", ...SOLID_STROKE }],
  ],
};

export default PageLastIcon;
