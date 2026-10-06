import type { Icon } from "../types";
import { SOLID } from "../system";

/** A note square with a folded corner. From the pdf set. */
export const StickyNoteIcon: Icon = {
  name: "StickyNoteIcon",
  node: [
    ["path", { d: "M13.5 19.5h-7a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7Z" }],
    ["path", { d: "M8 8.5h8M8 12h4" }],
    ["path", { d: "M13.5 19.5v-4a2 2 0 0 1 2-2h4Z", ...SOLID }],
  ],
};

export default StickyNoteIcon;
