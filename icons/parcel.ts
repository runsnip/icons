import type { Icon } from "../types";
import { SOLID } from "../system";

/** Parcel, the bundler: a parcel with its flaps open, the tape the mark. From the files set. */
export const ParcelIcon: Icon = {
  name: "ParcelIcon",
  node: [
    ["path", { d: "M4.5 8.5 6.5 4.5h11l2 4" }],
    ["rect", { x: 4.5, y: 8.5, width: 15, height: 12, rx: 1.5 }],
    ["rect", { x: 10.5, y: 8.5, width: 3, height: 5.5, rx: 0.5, ...SOLID }],
  ],
};

export default ParcelIcon;
