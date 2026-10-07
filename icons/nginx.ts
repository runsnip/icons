import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** nginx: a hexagon with an N. From the files set. */
export const NginxIcon: Icon = {
  name: "NginxIcon",
  node: [
    ["path", { d: "M12 3.5L19.36 7.75L19.36 16.25L12 20.5L4.64 16.25L4.64 7.75Z" }],
    ["path", { d: "M9.5 15.5v-7l5 7v-7", ...SOLID_STROKE }],
  ],
};

export default NginxIcon;
