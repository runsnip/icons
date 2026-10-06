import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A thumb up in outline, its cuff the mark: ThumbsUpIcon unfilled. From the collab set. */
export const ThumbsUpOutlineIcon: Icon = {
  name: "ThumbsUpOutlineIcon",
  node: [
    ["rect", { x: 3.5, y: 10.5, width: 3.5, height: 10, rx: 1, ...SOLID_STROKE }],
    ["path", { d: "M9 10.5 13 4.5a2 2 0 0 1 2 2v4h3a2 2 0 0 1 2 2.4l-1.1 6a2 2 0 0 1-2 1.6H9Z" }],
  ],
};

export default ThumbsUpOutlineIcon;
