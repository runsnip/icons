import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** RESTQL: a request going out, the reply coming back; the request the mark. From the files set. */
export const RestqlIcon: Icon = {
  name: "RestqlIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M7 9.5h9.5M14 7l2.5 2.5L14 12", ...SOLID_STROKE }],
    ["path", { d: "M17 14.5H7.5M10 12l-2.5 2.5L10 17" }],
  ],
};

export default RestqlIcon;
