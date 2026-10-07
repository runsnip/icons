import type { Icon } from "../types";
import { SOLID } from "../system";

/** Commitizen: a commit on its line beside its written message, the commit the mark. From the files set. */
export const CommitizenIcon: Icon = {
  name: "CommitizenIcon",
  node: [
    ["path", { d: "M7 3.5v4M7 13.5v7M12.5 8h8M12.5 12h8M12.5 16h5" }],
    ["circle", { cx: 7, cy: 10.5, r: 3, ...SOLID }],
  ],
};

export default CommitizenIcon;
