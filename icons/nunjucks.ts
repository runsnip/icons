import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Nunjucks: an N in a frame. From the files set. */
export const NunjucksIcon: Icon = {
  name: "NunjucksIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M8.5 15.5v-7l7 7v-7", ...SOLID_STROKE }],
  ],
};

export default NunjucksIcon;
