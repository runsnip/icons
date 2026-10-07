import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Deploying to a hosted platform: a cloud taking an upload, the arrow the mark. From the files set. */
export const CloudDeployIcon: Icon = {
  name: "CloudDeployIcon",
  node: [
    ["path", { d: "M8 18.5H7a3 3 0 0 1-.5-5.96A5 5 0 0 1 16 10a4.2 4.2 0 0 1 .5 8.5" }],
    ["path", { d: "M12 20v-7M9.5 15.5 12 13l2.5 2.5", ...SOLID_STROKE }],
  ],
};

export default CloudDeployIcon;
