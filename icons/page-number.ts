import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A page number: a page with # at its foot. From the insert set. */
export const PageNumberIcon: Icon = {
  name: "PageNumberIcon",
  node: [
    ["rect", { x: 4.5, y: 3.5, width: 15, height: 17, rx: 2.5 }],
    ["path", { d: "M8 7h8" }],
    ["path", { d: "M10 10.5v7.5M14 10.5v7.5M8 12.5h8M8 16h8", ...SOLID_STROKE }],
  ],
};

export default PageNumberIcon;
