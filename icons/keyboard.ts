import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Keyboard and shortcuts: a keyboard. From the collab set. */
export const KeyboardIcon: Icon = {
  name: "KeyboardIcon",
  node: [
    ["rect", { x: 3.5, y: 6, width: 17, height: 12, rx: 2.5 }],
    ["path", { d: "M7 10h.01M10.3 10h.01M13.7 10h.01M17 10h.01" }],
    ["path", { d: "M8.5 14.5h7", ...SOLID_STROKE }],
  ],
};

export default KeyboardIcon;
