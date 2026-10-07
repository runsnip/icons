import type { Icon } from "../types";
import { SOLID } from "../system";

/** just: a J that runs, the run the mark. From the files set. */
export const JustIcon: Icon = {
  name: "JustIcon",
  node: [
    ["path", { d: "M11 4.5v10a5 5 0 0 1-6.5 4.8" }],
    ["path", { d: "M15 8.5l5 3.5-5 3.5Z", ...SOLID }],
  ],
};

export default JustIcon;
