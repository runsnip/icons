import type { Icon } from "../types";
import { SOLID } from "../system";

/** Events: a solid source sending out waves. From the files set. */
export const EventIcon: Icon = {
  name: "EventIcon",
  node: [
    ["path", { d: "M9 9a4 4 0 0 0 0 6M15 9a4 4 0 0 1 0 6M6.5 6a8 8 0 0 0 0 12M17.5 6a8 8 0 0 1 0 12" }],
    ["circle", { cx: 12, cy: 12, r: 2, ...SOLID }],
  ],
};

export default EventIcon;
