import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** TSIL: a T between square brackets, the T the mark. From the files set. */
export const TsilIcon: Icon = {
  name: "TsilIcon",
  node: [
    ["path", { d: "M7.5 5h-2v14h2M16.5 5h2v14h-2" }],
    ["path", { d: "M8.5 9h7M12 9v7", ...SOLID_STROKE }],
  ],
};

export default TsilIcon;
