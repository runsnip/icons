import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** RunSnip VAudio: a song's wave over its lyric line, the line the mark, in the brand frame. From the brand set. */
export const VAudioBrandIcon: Icon = {
  name: "VAudioBrandIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
    ["path", { d: "M7.5 9.5v2M10 7.5v6M12.5 8.5v4M15 7v7.5M17.5 9.5v2" }],
    ["path", { d: "M8 17.5h8", ...SOLID_STROKE }],
  ],
};

export default VAudioBrandIcon;
