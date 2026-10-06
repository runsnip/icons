import type { Icon } from "../types";
import { SOLID } from "../system";

/** Who is here now: a user with a live dot. From the collab set. */
export const PresenceIcon: Icon = {
  name: "PresenceIcon",
  node: [
    ["circle", { cx: 10, cy: 8, r: 3.5 }],
    ["path", { d: "M3.5 20.5a6.5 6.5 0 0 1 9.75-5.63" }],
    ["circle", { cx: 17.5, cy: 17.5, r: 3, ...SOLID }],
  ],
};

export default PresenceIcon;
