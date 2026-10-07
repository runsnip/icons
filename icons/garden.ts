import type { Icon } from "../types";
import { SOLID } from "../system";

/** Garden: a sprout, its upper leaf the mark. From the files set. */
export const GardenIcon: Icon = {
  name: "GardenIcon",
  node: [
    ["path", { d: "M12 20.5V10.5M12 14.5c0-3.6-2.6-6-7-6 0 3.6 2.6 6 7 6Z" }],
    ["path", { d: "M12 10.5c0-3.6 2.6-6 7-6 0 3.6-2.6 6-7 6Z", ...SOLID }],
  ],
};

export default GardenIcon;
