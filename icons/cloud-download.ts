import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Downloading from the cloud: an arrow down out of a cloud, the arrow the mark. From the ui set. */
export const CloudDownloadIcon: Icon = {
  name: "CloudDownloadIcon",
  node: [
    ["path", { d: "M8 18.5H7a3 3 0 0 1-.5-5.96A5 5 0 0 1 16 10a4.2 4.2 0 0 1 .5 8.5" }],
    ["path", { d: "M12 12.5v7M9.5 17 12 19.5l2.5-2.5", ...SOLID_STROKE }],
  ],
};

export default CloudDownloadIcon;
