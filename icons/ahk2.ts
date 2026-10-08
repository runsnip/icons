import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** AutoHotkey v2: a framed H with a 2, the H the mark. From the files set. */
export const AutohotkeyV2Icon: Icon = {
  name: "AutohotkeyV2Icon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M14.5 7.5h2.25a1.1 1.1 0 0 1 .7 1.95L14.5 11.5h3.25" }],
    ["path", { d: "M7.5 7.5v9M12 10v6.5M7.5 13H12", ...SOLID_STROKE }],
  ],
};

export default AutohotkeyV2Icon;
