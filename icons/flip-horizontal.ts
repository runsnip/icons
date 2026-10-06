import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A shape mirrored across a vertical line. From the slides set. */
export const FlipHorizontalIcon: Icon = {
  name: "FlipHorizontalIcon",
  node: [
    ["path", { d: "M3.5 12 9 6v12Z" }],
    ["path", { d: "M20.5 12 15 6v12Z" }],
    ["path", { d: "M12 3.5v17", "stroke-dasharray": "0.5 3.5", ...SOLID_STROKE }],
  ],
};

export default FlipHorizontalIcon;
