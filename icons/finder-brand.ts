import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** RunSnip Finder: a folder, its front edge the mark, in the brand frame. From the brand set. */
export const FinderBrandIcon: Icon = {
  name: "FinderBrandIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
    ["path", { d: "M6.5 16.5V8h3.5l1.5 1.5h6v7Z" }],
    ["path", { d: "M6.5 12h11", ...SOLID_STROKE }],
  ],
};

export default FinderBrandIcon;
