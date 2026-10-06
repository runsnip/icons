import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A shape mirrored across a horizontal line. From the slides set. */
export const FlipVerticalIcon: Icon = {
  name: "FlipVerticalIcon",
  node: [
    ["path", { d: "M12 3.5 18 9H6Z" }],
    ["path", { d: "M12 20.5 18 15H6Z" }],
    ["path", { d: "M3.5 12h17", "stroke-dasharray": "0.5 3.5", ...SOLID_STROKE }],
  ],
};

export default FlipVerticalIcon;
