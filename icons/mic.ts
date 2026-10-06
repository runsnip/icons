import type { Icon } from "../types";
import { SOLID } from "../system";

/** Microphone on: a microphone. From the collab set. */
export const MicIcon: Icon = {
  name: "MicIcon",
  node: [
    ["rect", { x: 9, y: 3.5, width: 6, height: 10.5, rx: 3, ...SOLID }],
    ["path", { d: "M6.5 11a5.5 5.5 0 0 0 11 0M12 16.5v4" }],
  ],
};

export default MicIcon;
