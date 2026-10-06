import type { Icon } from "../types";
import { SOLID } from "../system";

/** Save as: a save with a small pen. From the insert set. */
export const SaveAsIcon: Icon = {
  name: "SaveAsIcon",
  node: [
    ["path", { d: "M3.5 13v5A2.5 2.5 0 0 0 6 20.5h12a2.5 2.5 0 0 0 2.5-2.5v-1" }],
    ["path", { d: "M8 16.5v-3l8-8 3 3-8 8Z", ...SOLID }],
  ],
};

export default SaveAsIcon;
