import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A microphone in outline, its stand the mark: MicIcon unfilled. From the collab set. */
export const MicOutlineIcon: Icon = {
  name: "MicOutlineIcon",
  node: [
    ["rect", { x: 9, y: 3.5, width: 6, height: 10.5, rx: 3 }],
    ["path", { d: "M6.5 11a5.5 5.5 0 0 0 11 0M12 16.5v4" }],
    ["path", { d: "M9 20.5h6", ...SOLID_STROKE }],
  ],
};

export default MicOutlineIcon;
