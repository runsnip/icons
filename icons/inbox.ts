import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Inbox: a tray. From the collab set. */
export const InboxIcon: Icon = {
  name: "InboxIcon",
  node: [
    ["path", { d: "M3.5 13.5 6.3 5.5h11.4l2.8 8V17a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 17ZM3.5 13.5H8M16 13.5h4.5" }],
    ["path", { d: "M8 13.5l1.5 2.5h5l1.5-2.5", ...SOLID_STROKE }],
  ],
};

export default InboxIcon;
