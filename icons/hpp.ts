import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** C++ header: an H and the two pluses, the pluses the mark. From the files set. */
export const HppIcon: Icon = {
  name: "HppIcon",
  node: [
    ["path", { d: "M5 6v12M12 6v12M5 12h7" }],
    ["path", { d: "M17 5.2v3.6M15.2 7h3.6M17 15.2v3.6M15.2 17h3.6", ...SOLID_STROKE }],
  ],
};

export default HppIcon;
