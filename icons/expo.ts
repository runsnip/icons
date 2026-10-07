import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Expo: the arch, a small inner arch the mark. From the files set. */
export const ExpoIcon: Icon = {
  name: "ExpoIcon",
  node: [
    ["path", { d: "M3.5 19.5 12 4.5l8.5 15" }],
    ["path", { d: "M9 19.5l3-5.5 3 5.5", ...SOLID_STROKE }],
  ],
};

export default ExpoIcon;
