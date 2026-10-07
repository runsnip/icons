import type { Icon } from "../types";
import { SOLID } from "../system";

/** UnoCSS: squares and circles of atomic shapes, one circle filled. From the files set. */
export const UnocssIcon: Icon = {
  name: "UnocssIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 7, height: 7, rx: 1.5 }],
    ["circle", { cx: 17, cy: 7, r: 3.5 }],
    ["rect", { x: 13.5, y: 13.5, width: 7, height: 7, rx: 1.5 }],
    ["circle", { cx: 7, cy: 17, r: 3.5, ...SOLID }],
  ],
};

export default UnocssIcon;
