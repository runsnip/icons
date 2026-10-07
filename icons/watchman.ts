import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Watchman: a wristwatch, its hands the mark. From the files set. */
export const WatchmanIcon: Icon = {
  name: "WatchmanIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 6 }],
    ["path", { d: "M9 6.8 9.7 3.5h4.6L15 6.8M9 17.2l.7 3.3h4.6l.7-3.3" }],
    ["path", { d: "M12 9v3h2.5", ...SOLID_STROKE }],
  ],
};

export default WatchmanIcon;
