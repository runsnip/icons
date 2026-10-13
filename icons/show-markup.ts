import type { Icon } from "../types";
import { SOLID } from "../system";

/** Show markup: a page of text, a balloon in its margin. From the insert set. */
export const ShowMarkupIcon: Icon = {
  name: "ShowMarkupIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 11, height: 17, rx: 2 }],
    ["path", { d: "M6.5 8h5M6.5 12h5M6.5 16h3" }],
    ["rect", { x: 16, y: 6.5, width: 4.5, height: 5.5, rx: 1.5, ...SOLID }],
  ],
};

export default ShowMarkupIcon;
