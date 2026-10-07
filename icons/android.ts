import type { Icon } from "../types";
import { SOLID } from "../system";

/** A robot's domed head with antennae, its eyes filled: Android. From the files set. */
export const AndroidIcon: Icon = {
  name: "AndroidIcon",
  node: [
    ["path", { d: "M4 17.5a8 8 0 0 1 16 0ZM7.5 10.9 5.6 7M16.5 10.9 18.4 7" }],
    ["circle", { cx: 9, cy: 14.2, r: 1.3, ...SOLID }],
    ["circle", { cx: 15, cy: 14.2, r: 1.3, ...SOLID }],
  ],
};

export default AndroidIcon;
