import type { Icon } from "../types";
import { SOLID } from "../system";

/** CMake: a triangle parted in three, its base the mark. From the files set. */
export const CmakeIcon: Icon = {
  name: "CmakeIcon",
  node: [
    ["path", { d: "M12 3.5 20.5 19.5h-17Z" }],
    ["path", { d: "M12 4v10" }],
    ["path", { d: "M3.5 19.5 12 14l8.5 5.5Z", ...SOLID }],
  ],
};

export default CmakeIcon;
