import type { Icon } from "../types";
import { SOLID } from "../system";

/** ndst: a dual-screen handheld, its touch screen filled. From the files set. */
export const NdstIcon: Icon = {
  name: "NdstIcon",
  node: [
    ["rect", { x: 5, y: 3.5, width: 14, height: 7.5, rx: 1.5 }],
    ["rect", { x: 5, y: 13, width: 14, height: 7.5, rx: 1.5 }],
    ["rect", { x: 8.5, y: 15.5, width: 7, height: 2.5, rx: 0.5, ...SOLID }],
  ],
};

export default NdstIcon;
