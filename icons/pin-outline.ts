import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A pin in outline, its needle the mark: PinIcon unfilled — not pinned. From the ui set. */
export const PinOutlineIcon: Icon = {
  name: "PinOutlineIcon",
  node: [
    ["path", { d: "M8.5 4.5h7l-1 5.5 2.5 3h-10l2.5-3Z" }],
    ["path", { d: "M12 15v5.5", ...SOLID_STROKE }],
  ],
};

export default PinOutlineIcon;
