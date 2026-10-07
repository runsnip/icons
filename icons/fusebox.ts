import type { Icon } from "../types";
import { SOLID } from "../system";

/** FuseBox: a box, the bolt in it the mark. From the files set. */
export const FuseboxIcon: Icon = {
  name: "FuseboxIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M13.5 6.5 8.5 13H12l-1.5 4.5L15.5 11H12Z", ...SOLID }],
  ],
};

export default FuseboxIcon;
