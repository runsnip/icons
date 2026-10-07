import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A triangle beside a thickened slanted stroke: Amplify. From the files set. */
export const AmplifyIcon: Icon = {
  name: "AmplifyIcon",
  node: [
    ["path", { d: "M3.5 19.5 9.5 7.5l6 12Z" }],
    ["path", { d: "M11.5 4.5l8.5 15", ...SOLID_STROKE }],
  ],
};

export default AmplifyIcon;
