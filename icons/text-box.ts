import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A text box: a frame with a T inside. From the insert set. */
export const TextBoxIcon: Icon = {
  name: "TextBoxIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2 }],
    ["path", { d: "M8 9h8", ...SOLID_STROKE }],
    ["path", { d: "M12 9v6.5" }],
  ],
};

export default TextBoxIcon;
