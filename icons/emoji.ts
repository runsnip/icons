import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** An emoji: a smiling face. From the insert set. */
export const EmojiIcon: Icon = {
  name: "EmojiIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M9 9.5v.5M15 9.5v.5" }],
    ["path", { d: "M8.5 14a4 4 0 0 0 7 0", ...SOLID_STROKE }],
  ],
};

export default EmojiIcon;
