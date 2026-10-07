import type { Icon } from "../types";
import { SOLID } from "../system";

/** Make: a hammer, its head the mark. From the files set. */
export const MakefileIcon: Icon = {
  name: "MakefileIcon",
  node: [
    ["path", { d: "M5 19 14 10" }],
    ["path", { d: "M19.42 10.94 16.94 13.42 10.58 7.06 13.06 4.58Z", ...SOLID }],
  ],
};

export default MakefileIcon;
