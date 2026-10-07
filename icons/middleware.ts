import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Middleware: the layer between two others, the layer the mark. From the files set. */
export const MiddlewareIcon: Icon = {
  name: "MiddlewareIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 4.5, rx: 1.5 }],
    ["rect", { x: 3.5, y: 16, width: 17, height: 4.5, rx: 1.5 }],
    ["path", { d: "M6.5 12h11", ...SOLID_STROKE }],
  ],
};

export default MiddlewareIcon;
