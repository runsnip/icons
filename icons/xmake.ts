import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** xmake: a heavy X in a diamond. From the files set. */
export const XmakeIcon: Icon = {
  name: "XmakeIcon",
  node: [
    ["path", { d: "M12 3.5 20.5 12 12 20.5 3.5 12Z" }],
    ["path", { d: "M9.5 9.5l5 5M14.5 9.5l-5 5", ...SOLID_STROKE }],
  ],
};

export default XmakeIcon;
