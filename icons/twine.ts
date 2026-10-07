import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Twine stories: two passages joined by a link, the link the mark. From the files set. */
export const TwineIcon: Icon = {
  name: "TwineIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 7, height: 5, rx: 1.5 }],
    ["rect", { x: 13.5, y: 14.5, width: 7, height: 5, rx: 1.5 }],
    ["path", { d: "M10.5 7h3a2.5 2.5 0 0 1 2.5 2.5v5", ...SOLID_STROKE }],
  ],
};

export default TwineIcon;
