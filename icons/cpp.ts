import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** C++: the letter C, its two pluses the mark. From the files set. */
export const CppIcon: Icon = {
  name: "CppIcon",
  node: [
    ["path", { d: "M12 8.5A5 5 0 1 0 12 15.5" }],
    ["path", { d: "M14.8 7.75h4.4M17 5.55v4.4M14.8 16.25h4.4M17 14.05v4.4", ...SOLID_STROKE }],
  ],
};

export default CppIcon;
