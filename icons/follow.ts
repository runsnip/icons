import type { Icon } from "../types";
import { SOLID } from "../system";

/** Follow a collaborator: an eye on their cursor. From the collab set. */
export const FollowIcon: Icon = {
  name: "FollowIcon",
  node: [
    ["path", { d: "M3.5 9S5.8 4.5 9.5 4.5s6 4.5 6 4.5-2.3 4.5-6 4.5-6-4.5-6-4.5Z" }],
    ["circle", { cx: 9.5, cy: 9, r: 1 }],
    ["path", { d: "M13 13 20.5 15.8l-3.3 1.4-1.4 3.3Z", ...SOLID }],
  ],
};

export default FollowIcon;
