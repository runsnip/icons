import type { Icon } from "../types";
import { SOLID } from "../system";

/** Lyrics: lines of words with a note, the note the mark. From the files set. */
export const LyricIcon: Icon = {
  name: "LyricIcon",
  node: [
    ["path", { d: "M4.5 6.5h15M4.5 11.5h8M4.5 16.5h6" }],
    ["path", { d: "M16.5 10h2.5v1.8h-1.2V18a2.2 2.2 0 1 1-1.3-2Z", ...SOLID }],
  ],
};

export default LyricIcon;
