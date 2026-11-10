import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A fingerprint: ridges arched round its core, the core the mark. From the ui set. */
export const FingerprintIcon: Icon = {
  name: "FingerprintIcon",
  node: [
    ["path", { d: "M4.5 16V11.5a7.5 7.5 0 0 1 15 0v2.5M8 20V11.5a4 4 0 0 1 8 0V15c0 2-.5 3.7-1.5 5.5" }],
    ["path", { d: "M12 11.5V16", ...SOLID_STROKE }],
  ],
};

export default FingerprintIcon;
