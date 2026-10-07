import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A collection of API requests: a request sent out, its arrow the mark. From the files set. */
export const ApiCollectionIcon: Icon = {
  name: "ApiCollectionIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M8.5 15.5 15.5 8.5M10 8.5h5.5V14", ...SOLID_STROKE }],
  ],
};

export default ApiCollectionIcon;
