import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Puppeteer: a browser window on strings, the control bar the mark. From the files set. */
export const PuppeteerIcon: Icon = {
  name: "PuppeteerIcon",
  node: [
    ["path", { d: "M5.5 5.5 7.5 12M18.5 5.5l-2 6.5M6 15.5h12" }],
    ["rect", { x: 5.5, y: 12, width: 13, height: 8.5, rx: 1.5 }],
    ["path", { d: "M5.5 5.5h13M12 3.5v4.5", ...SOLID_STROKE }],
  ],
};

export default PuppeteerIcon;
