import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Microphone off: a microphone struck through. From the collab set. */
export const MicOffIcon: Icon = {
  name: "MicOffIcon",
  node: [
    ["rect", { x: 9, y: 3.5, width: 6, height: 10.5, rx: 3 }],
    ["path", { d: "M6.5 11a5.5 5.5 0 0 0 11 0M12 16.5v4" }],
    ["path", { d: "M4.5 19.5 19.5 4.5", ...SOLID_STROKE }],
  ],
};

export default MicOffIcon;
