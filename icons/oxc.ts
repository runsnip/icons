import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Oxc, the JavaScript oxidation compiler: an ox's head, its horns the mark. From the files set. */
export const OxcIcon: Icon = {
  name: "OxcIcon",
  node: [
    ["path", { d: "M8 10.5h8V16a4 4 0 0 1-8 0Z" }],
    ["path", { d: "M10.5 16.5h3" }],
    ["path", { d: "M3.5 5.5c.8 3.2 2.5 5 4.5 5M20.5 5.5c-.8 3.2-2.5 5-4.5 5", ...SOLID_STROKE }],
  ],
};

export default OxcIcon;
