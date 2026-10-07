import type { Icon } from "../types";
import { SOLID } from "../system";

/** A cluster: nodes round a centre, the centre the mark. From the files set. */
export const ClusterIcon: Icon = {
  name: "ClusterIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 2.2, ...SOLID }],
    ["circle", { cx: 6, cy: 8.5, r: 2.2 }],
    ["circle", { cx: 18, cy: 8.5, r: 2.2 }],
    ["circle", { cx: 12, cy: 18.3, r: 2.2 }],
    ["path", { d: "M10.1 10.9 7.9 9.6M13.9 10.9l2.2-1.3M12 14.2v1.9" }],
  ],
};

export default ClusterIcon;
