import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Health checks: a heart with a tick in it, the tick the mark. From the ops set. */
export const DoctorIcon: Icon = {
  name: "DoctorIcon",
  node: [
    ["path", { d: "M12 20C6.5 16 3.5 12.7 3.5 9.25A4.75 4.75 0 0 1 12 6.4a4.75 4.75 0 0 1 8.5 2.85c0 3.45-3 6.75-8.5 10.75Z" }],
    ["path", { d: "M8.75 12.25 11 14.5l4.25-4.25", ...SOLID_STROKE }],
  ],
};

export default DoctorIcon;
