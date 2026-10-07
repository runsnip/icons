import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Dhall: a lambda in a square, the lambda the mark. From the files set. */
export const DhallIcon: Icon = {
  name: "DhallIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M8.5 7h1.5l5.5 10.5M12.25 11.5 8.5 17.5", ...SOLID_STROKE }],
  ],
};

export default DhallIcon;
