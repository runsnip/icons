import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** An editor in the browser (StackBlitz and the like): a window, the code brackets in it the mark. From the files set. */
export const BrowserIdeIcon: Icon = {
  name: "BrowserIdeIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2.5 }],
    ["path", { d: "M3.5 9h17" }],
    ["path", { d: "M10 12 8 14.25l2 2.25M14 12l2 2.25-2 2.25", ...SOLID_STROKE }],
  ],
};

export default BrowserIdeIcon;
