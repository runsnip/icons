import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A bar and a left chevron (first page). From the pdf set. */
export const PageFirstIcon: Icon = {
  name: "PageFirstIcon",
  node: [
    ["path", { d: "M6.5 5.5v13" }],
    ["path", { d: "M17.5 5.5 11 12l6.5 6.5", ...SOLID_STROKE }],
  ],
};

export default PageFirstIcon;
