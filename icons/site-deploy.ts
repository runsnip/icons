import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A site's deploy config: a site's window with the arrow that publishes it, the arrow the mark. From the files set. */
export const SiteDeployIcon: Icon = {
  name: "SiteDeployIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2.5 }],
    ["path", { d: "M3.5 8.5h17" }],
    ["path", { d: "M12 16.5v-5M9.5 13.5 12 11l2.5 2.5", ...SOLID_STROKE }],
  ],
};

export default SiteDeployIcon;
