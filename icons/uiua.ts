import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Uiua: a circle cut by a heavy S. From the files set. */
export const UiuaIcon: Icon = {
  name: "UiuaIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M12 3.5c-3 2-3 6.5 0 8.5s3 6.5 0 8.5", ...SOLID_STROKE }],
  ],
};

export default UiuaIcon;
