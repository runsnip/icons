import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Capacitor: the circuit symbol, its two plates the mark. From the files set. */
export const CapacitorIcon: Icon = {
  name: "CapacitorIcon",
  node: [
    ["path", { d: "M3.5 12h6M14.5 12h6" }],
    ["path", { d: "M9.5 6v12M14.5 6v12", ...SOLID_STROKE }],
  ],
};

export default CapacitorIcon;
