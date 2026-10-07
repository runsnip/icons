import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A thickened H in a frame: AutoHotkey. From the files set. */
export const AutohotkeyIcon: Icon = {
  name: "AutohotkeyIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M9 7.5v9M15 7.5v9M9 12h6", ...SOLID_STROKE }],
  ],
};

export default AutohotkeyIcon;
