import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** ShellCheck: a terminal's prompt and a thickened tick. From the files set. */
export const ShellcheckIcon: Icon = {
  name: "ShellcheckIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2.5 }],
    ["path", { d: "M7 9l2.5 2-2.5 2" }],
    ["path", { d: "M11.5 14l2 2 3.5-4", ...SOLID_STROKE }],
  ],
};

export default ShellcheckIcon;
