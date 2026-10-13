import type { Icon } from "../types";
import { SOLID } from "../system";

/** A bucket of object storage: a pail narrowing to its foot, its open top solid. From the ops set. */
export const BucketIcon: Icon = {
  name: "BucketIcon",
  node: [
    ["ellipse", { cx: 12, cy: 6.5, rx: 8.5, ry: 3, ...SOLID }],
    ["path", { d: "M3.5 6.5l2 11.5c.25 1.4 3 2.5 6.5 2.5s6.25-1.1 6.5-2.5l2-11.5M4.6 12.75c1.4 1 4.1 1.75 7.4 1.75s6-.75 7.4-1.75" }],
  ],
};

export default BucketIcon;
