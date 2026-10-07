import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** JavaScript: the letters JS in a square, the letters the mark. From the files set. */
export const JavascriptIcon: Icon = {
  name: "JavascriptIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M10.5 7.5v8a2.5 2.5 0 0 1-4.5 1.5M17.8 8.8a2.6 2.6 0 0 0-2.3-1.3c-1.4 0-2.4.8-2.4 2 0 2.8 4.9 1.6 4.9 4.9 0 1.3-1.1 2.3-2.6 2.3-1.2 0-2.2-.6-2.6-1.6", ...SOLID_STROKE }],
  ],
};

export default JavascriptIcon;
