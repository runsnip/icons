import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** An open arc over a thickened bar: Appwrite. From the files set. */
export const AppwriteIcon: Icon = {
  name: "AppwriteIcon",
  node: [
    ["path", { d: "M4.5 17A7.5 7.5 0 0 1 18.8 9.5" }],
    ["path", { d: "M10.5 17h9", ...SOLID_STROKE }],
  ],
};

export default AppwriteIcon;
