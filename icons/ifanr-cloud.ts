import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** ifanr cloud: a cloud with bars in it, the middle bar the mark. From the files set. */
export const IfanrCloudIcon: Icon = {
  name: "IfanrCloudIcon",
  node: [
    ["path", { d: "M7.45 17.72a3.48 3.48 0 0 1-.52-6.97 4.79 4.79 0 0 1 9.32-1.22A4.09 4.09 0 0 1 16.16 17.72Z" }],
    ["path", { d: "M9.25 13v2M14.75 13v2" }],
    ["path", { d: "M12 11.75v3.75", ...SOLID_STROKE }],
  ],
};

export default IfanrCloudIcon;
