import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Unity: a cube's outline with its three edges meeting in a heavy Y. From the files set. */
export const UnityIcon: Icon = {
  name: "UnityIcon",
  node: [
    ["path", { d: "M12 3.5 19.5 7.75v8.5L12 20.5l-7.5-4.25v-8.5Z" }],
    ["path", { d: "M12 12v5M12 12 7.7 9.5M12 12l4.3-2.5", ...SOLID_STROKE }],
  ],
};

export default UnityIcon;
