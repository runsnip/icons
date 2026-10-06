import type { Icon } from "../types";
import { SOLID } from "../system";

/** Crop marks. From the slides set. */
export const CropIcon: Icon = {
  name: "CropIcon",
  node: [
    ["path", { d: "M7 3.5V17h13.5M3.5 7H17v13.5" }],
    ["rect", { x: 9.5, y: 9.5, width: 5, height: 5, rx: 1, ...SOLID }],
  ],
};

export default CropIcon;
