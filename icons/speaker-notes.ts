import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A slide with lines of notes beneath. From the slides set. */
export const SpeakerNotesIcon: Icon = {
  name: "SpeakerNotesIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 9, rx: 2 }],
    ["path", { d: "M3.5 16.5h17M3.5 20.5h10", ...SOLID_STROKE }],
  ],
};

export default SpeakerNotesIcon;
