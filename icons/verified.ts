import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Verified: a rosette with a tick, the tick the mark. From the files set. */
export const VerifiedIcon: Icon = {
  name: "VerifiedIcon",
  node: [
    ["path", { d: "M12.00 3.50L13.92 4.85L16.25 4.64L17.23 6.77L19.36 7.75L19.15 10.08L20.50 12.00L19.15 13.92L19.36 16.25L17.23 17.23L16.25 19.36L13.92 19.15L12.00 20.50L10.08 19.15L7.75 19.36L6.77 17.23L4.64 16.25L4.85 13.92L3.50 12.00L4.85 10.08L4.64 7.75L6.77 6.77L7.75 4.64L10.08 4.85Z" }],
    ["path", { d: "M8.75 12.25l2.25 2.25 4.25-4.5", ...SOLID_STROKE }],
  ],
};

export default VerifiedIcon;
