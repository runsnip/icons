import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A PM2 ecosystem file: a process kept running, the turn of its restart the mark. From the files set. */
export const Pm2EcosystemIcon: Icon = {
  name: "Pm2EcosystemIcon",
  node: [
    ["path", { d: "M19.5 12a7.5 7.5 0 1 1-2.2-5.3" }],
    ["circle", { cx: 12, cy: 12, r: 2.5 }],
    ["path", { d: "M18 3.5v3.5h-3.5", ...SOLID_STROKE }],
  ],
};

export default Pm2EcosystemIcon;
