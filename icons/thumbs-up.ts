import type { Icon } from "../types";
import { SOLID } from "../system";

/** Approve or react: a thumb up. From the collab set. */
export const ThumbsUpIcon: Icon = {
  name: "ThumbsUpIcon",
  node: [
    ["rect", { x: 3.5, y: 10.5, width: 3.5, height: 10, rx: 1, ...SOLID }],
    ["path", { d: "M9 10.5 13 4.5a2 2 0 0 1 2 2v4h3a2 2 0 0 1 2 2.4l-1.1 6a2 2 0 0 1-2 1.6H9Z" }],
  ],
};

export default ThumbsUpIcon;
