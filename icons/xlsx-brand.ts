import type { Icon } from "../types";
import { SOLID } from "../system";

/** RunSnip Xlsx: a grid of cells, its header cell filled, in the brand frame. From the brand set. */
export const XlsxBrandIcon: Icon = {
  name: "XlsxBrandIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
    ["path", { d: "M5.5 10h13M10 5.5v13M10 15.25h8.5" }],
    ["rect", { x: 6, y: 6, width: 2.5, height: 2.5, rx: 0.75, ...SOLID }],
  ],
};

export default XlsxBrandIcon;
