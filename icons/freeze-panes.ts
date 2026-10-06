import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A grid with its first row and column emphasised. From the sheets set. */
export const FreezePanesIcon: Icon = {
  name: "FreezePanesIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 2 }],
    ["path", { d: "M8.5 14.5h12M14.5 8.5v12", "stroke-dasharray": "0 3" }],
    ["path", { d: "M4.5 8.5h15M8.5 4.5v15", ...SOLID_STROKE }],
  ],
};

export default FreezePanesIcon;
