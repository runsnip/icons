import type { Icon } from "../types";
import { SOLID } from "../system";

/** Keystatic: a content panel struck by a bolt, the bolt the mark. From the files set. */
export const KeystaticIcon: Icon = {
  name: "KeystaticIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M13 6.5 8.5 13h3l-1 4.5 5-6.5h-3Z", ...SOLID }],
  ],
};

export default KeystaticIcon;
