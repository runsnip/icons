import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Haskell: >λ=, the lambda the mark. From the files set. */
export const HaskellIcon: Icon = {
  name: "HaskellIcon",
  node: [
    ["path", { d: "M3.5 5.5 8 12l-4.5 6.5M16 10h4.5M17.5 14h3" }],
    ["path", { d: "M7.5 5.5l9 13M12 12l-4.5 6.5", ...SOLID_STROKE }],
  ],
};

export default HaskellIcon;
