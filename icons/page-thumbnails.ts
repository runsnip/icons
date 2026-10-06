import type { Icon } from "../types";
import { SOLID } from "../system";

/** Small pages in a column. From the pdf set. */
export const PageThumbnailsIcon: Icon = {
  name: "PageThumbnailsIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 5, height: 4, rx: 1 }],
    ["rect", { x: 3.5, y: 10, width: 5, height: 4, rx: 1, ...SOLID }],
    ["rect", { x: 3.5, y: 16.5, width: 5, height: 4, rx: 1 }],
    ["rect", { x: 11.5, y: 3.5, width: 9, height: 17, rx: 2 }],
  ],
};

export default PageThumbnailsIcon;
