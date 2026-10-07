import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Perl: an onion, its inner layer the mark. From the files set. */
export const PerlIcon: Icon = {
  name: "PerlIcon",
  node: [
    ["path", { d: "M12 3.5C12 7 19 9.5 19 15a7 5.5 0 0 1-14 0C5 9.5 12 7 12 3.5Z" }],
    ["path", { d: "M12 8C10.5 10.2 9 12.2 9 15.5", ...SOLID_STROKE }],
  ],
};

export default PerlIcon;
