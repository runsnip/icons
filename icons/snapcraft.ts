import type { Icon } from "../types";
import { SOLID } from "../system";

/** Snapcraft: an arrow, the notch at its tail filled. From the files set. */
export const SnapcraftIcon: Icon = {
  name: "SnapcraftIcon",
  node: [
    ["path", { d: "M4.5 4.5 20 12 4.5 19.5Z" }],
    ["path", { d: "M4.5 9.5 10 12l-5.5 2.5Z", ...SOLID }],
  ],
};

export default SnapcraftIcon;
