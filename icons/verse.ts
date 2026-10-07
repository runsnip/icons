import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Verse: a heavy V between braces. From the files set. */
export const VerseIcon: Icon = {
  name: "VerseIcon",
  node: [
    ["path", { d: "M8 4.5c-1.8 0-2.5 1-2.5 2.5v2.5c0 1.5-.7 2.5-2 2.5 1.3 0 2 1 2 2.5V17c0 1.5.7 2.5 2.5 2.5M16 4.5c1.8 0 2.5 1 2.5 2.5v2.5c0 1.5.7 2.5 2 2.5-1.3 0-2 1-2 2.5V17c0 1.5-.7 2.5-2.5 2.5" }],
    ["path", { d: "M9.5 9 12 15l2.5-6", ...SOLID_STROKE }],
  ],
};

export default VerseIcon;
