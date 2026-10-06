import type { Icon } from "../types";
import { SOLID } from "../system";

/** A paint bucket over a colour bar. From the sheets set. */
export const FillColorIcon: Icon = {
  name: "FillColorIcon",
  node: [
    ["path", { d: "M10 4l6 6-6 6-6-6ZM4 10h12M18.5 12.5c-1 1.5-1.5 2.3-1.5 3a1.5 1.5 0 0 0 3 0c0-.7-.5-1.5-1.5-3Z" }],
    ["rect", { x: 3.5, y: 18, width: 17, height: 2.5, rx: 1, ...SOLID }],
  ],
};

export default FillColorIcon;
