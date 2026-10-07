import type { Icon } from "../types";
import { SOLID } from "../system";

/** Lua: a planet with its moon inside and a moon in orbit, the inner moon the mark. From the files set. */
export const LuaIcon: Icon = {
  name: "LuaIcon",
  node: [
    ["circle", { cx: 11, cy: 13, r: 7 }],
    ["circle", { cx: 19, cy: 5, r: 1.5 }],
    ["circle", { cx: 13.5, cy: 10.5, r: 2, ...SOLID }],
  ],
};

export default LuaIcon;
