import type { Icon } from "../types";
import { SOLID } from "../system";

/** RunSnip Page: a page with its hero block, the hero the mark, in the brand frame. From the brand set. */
export const PageBrandIcon: Icon = {
  name: "PageBrandIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
    ["rect", { x: 7, y: 7, width: 10, height: 4, rx: 1, ...SOLID }],
    ["path", { d: "M7 14h10M7 17h6" }],
  ],
};

export default PageBrandIcon;
