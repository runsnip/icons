import type { Icon } from "../types";
import { SOLID } from "../system";

/** Notifications: a bell. From the collab set. */
export const BellIcon: Icon = {
  name: "BellIcon",
  node: [
    ["path", { d: "M6.5 16.5V10.5a5.5 5.5 0 0 1 11 0v6M4.5 16.5h15" }],
    ["path", { d: "M10 18.5h4a2 2 0 0 1-4 0Z", ...SOLID }],
  ],
};

export default BellIcon;
