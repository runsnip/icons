import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** An infinity loop holding a thickened minus and plus: Arduino. From the files set. */
export const ArduinoIcon: Icon = {
  name: "ArduinoIcon",
  node: [
    ["path", { d: "M12 12c-1.6-2.3-2.4-4.25-4.25-4.25a4.25 4.25 0 0 0 0 8.5c1.85 0 2.65-1.95 4.25-4.25s2.4-4.25 4.25-4.25a4.25 4.25 0 0 1 0 8.5c-1.85 0-2.65-1.95-4.25-4.25" }],
    ["path", { d: "M6 12h3.4M14.8 12h3.4M16.5 10.3v3.4", ...SOLID_STROKE }],
  ],
};

export default ArduinoIcon;
