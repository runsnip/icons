import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A sheet tab with a plus. From the sheets set. */
export const InsertSheetIcon: Icon = {
  name: "InsertSheetIcon",
  node: [
    ["path", { d: "M3.5 4.5h17M5 4.5v12a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-12" }],
    ["path", { d: "M12 8.5v7M8.5 12h7", ...SOLID_STROKE }],
  ],
};

export default InsertSheetIcon;
