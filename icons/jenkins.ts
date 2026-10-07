import type { Icon } from "../types";
import { SOLID } from "../system";

/** Jenkins: the butler, his bow tie the mark. From the files set. */
export const JenkinsIcon: Icon = {
  name: "JenkinsIcon",
  node: [
    ["circle", { cx: 12, cy: 9, r: 5 }],
    ["path", { d: "M4.5 20.5c0-1.5.5-2.7 1.5-3.5M19.5 20.5c0-1.5-.5-2.7-1.5-3.5" }],
    ["path", { d: "M7.5 15.5l4.5 2.2 4.5-2.2v5l-4.5-2.2-4.5 2.2Z", ...SOLID }],
  ],
};

export default JenkinsIcon;
