import type { Icon } from "../types";
import { SOLID } from "../system";

/** Luau: a tilted square with a small square in its corner, filled. From the files set. */
export const LuauIcon: Icon = {
  name: "LuauIcon",
  node: [
    ["path", { d: "M7.4 4.04 19.96 7.4 16.6 19.96 4.04 16.6Z" }],
    ["path", { d: "M17.04 11.54 14.14 10.76 14.92 7.86 17.82 8.64Z", ...SOLID }],
  ],
};

export default LuauIcon;
