import type { Icon } from "../types";
import { SOLID } from "../system";

/** A background job's trigger (Trigger.dev and the like): a circle, the bolt in it the mark. From the files set. */
export const JobTriggerIcon: Icon = {
  name: "JobTriggerIcon",
  node: [
    ["circle", { cx: 12, cy: 12, r: 8.5 }],
    ["path", { d: "M13 6.5 8.5 13H12l-1 4.5 4.5-6.5H12Z", ...SOLID }],
  ],
};

export default JobTriggerIcon;
