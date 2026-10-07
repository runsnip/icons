import type { Icon } from "../types";
import { SOLID } from "../system";

/** A store: a shop front, its awning the mark. From the files set. */
export const StoreIcon: Icon = {
  name: "StoreIcon",
  node: [
    ["path", { d: "M5.5 10.5v9h13v-9" }],
    ["path", { d: "M10 19.5v-4h4v4" }],
    ["path", { d: "M5.5 4.5h13l2 4.5h-17Z", ...SOLID }],
  ],
};

export default StoreIcon;
