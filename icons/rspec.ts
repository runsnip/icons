import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** RSpec: a gem with a thickened tick in it. From the files set. */
export const RspecIcon: Icon = {
  name: "RspecIcon",
  node: [
    ["path", { d: "M3.5 9 12 20.5 20.5 9 17 4.5H7Z" }],
    ["path", { d: "M8.5 10 11 12.5 15.5 8", ...SOLID_STROKE }],
  ],
};

export default RspecIcon;
