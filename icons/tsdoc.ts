import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** TSDoc: a doc comment's slash, then its lines; the slash the mark. From the files set. */
export const TsdocIcon: Icon = {
  name: "TsdocIcon",
  node: [
    ["path", { d: "M12 7.5h7.5M12 12h7.5M12 16.5h5" }],
    ["path", { d: "M9 4.5 5 19.5", ...SOLID_STROKE }],
  ],
};

export default TsdocIcon;
