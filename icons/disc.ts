import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A disc image: a disc, its hub the mark. From the files set. */
export const DiscIcon: Icon = {
  name: "DiscIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["circle", { cx: 12, cy: 12, r: 2.5, ...SOLID_STROKE }],
  ],
};

export default DiscIcon;
