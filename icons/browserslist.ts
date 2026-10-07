import type { Icon } from "../types";
import { SOLID } from "../system";

/** Browserslist: a browser window holding a list, the bullets the mark. From the files set. */
export const BrowserslistIcon: Icon = {
  name: "BrowserslistIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2.5 }],
    ["path", { d: "M3.5 9h17M10.5 13h6M10.5 16.5h6" }],
    ["circle", { cx: 7.5, cy: 13, r: 1.3, ...SOLID }],
    ["circle", { cx: 7.5, cy: 16.5, r: 1.3, ...SOLID }],
  ],
};

export default BrowserslistIcon;
