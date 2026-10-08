import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Auto (releases): a dial broken in segments, its needle the mark. From the files set. */
export const AutoReleaseIcon: Icon = {
  name: "AutoReleaseIcon",
  node: [
    ["path", { d: "M5.1 16.5A8 8 0 0 1 7 6.4M10 4.75a8 8 0 0 1 4 0M17 6.4a8 8 0 0 1 1.9 10.1" }],
    ["path", { d: "M12 13 8.5 9.5", ...SOLID_STROKE }],
  ],
};

export default AutoReleaseIcon;
