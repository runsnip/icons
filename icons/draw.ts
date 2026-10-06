import type { Icon } from "../types";
import { SOLID } from "../system";

/** A pen drawing a free curve. From the pdf set. */
export const DrawIcon: Icon = {
  name: "DrawIcon",
  node: [
    ["path", { d: "M3.5 19c1-2.5 2.5-3.5 4-2.5s2 1.5 3.5 0" }],
    ["path", { d: "M11.5 16.5V13.5L17.5 7.5 20.5 10.5 14.5 16.5Z", ...SOLID }],
  ],
};

export default DrawIcon;
