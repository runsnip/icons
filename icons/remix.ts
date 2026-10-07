import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Remix: an R, the short bar at its foot the mark. From the files set. */
export const RemixIcon: Icon = {
  name: "RemixIcon",
  node: [
    ["path", { d: "M9.5 18.5v-13h5a3.5 3.5 0 0 1 0 7h-5M14.5 12.5c1.6.6 2.5 1.8 2.5 3.8v2.2" }],
    ["path", { d: "M4.5 18.5h5", ...SOLID_STROKE }],
  ],
};

export default RemixIcon;
