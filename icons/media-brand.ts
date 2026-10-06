import type { Icon } from "../types";
import { SOLID } from "../system";

/** RunSnip Media: a clip on its timeline, the play the mark, in the brand frame. From the brand set. */
export const MediaBrandIcon: Icon = {
  name: "MediaBrandIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
    ["path", { d: "M10 7.5v6l5-3Z", ...SOLID }],
    ["path", { d: "M7 16.5h10" }],
  ],
};

export default MediaBrandIcon;
