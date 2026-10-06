import type { Icon } from "../types";
import { SOLID } from "../system";

/** Dark theme: a moon with a star. From the collab set. */
export const MoonIcon: Icon = {
  name: "MoonIcon",
  node: [
    ["path", { d: "M11.11 4.52A8 8 0 1 0 19.49 12.89A6 6 0 0 1 11.11 4.52Z" }],
    ["path", { d: "M17.5 3.5q.4 2.6 3 3-2.6.4-3 3-.4-2.6-3-3 2.6-.4 3-3Z", ...SOLID }],
  ],
};

export default MoonIcon;
