import type { Icon } from "../types";
import { SOLID } from "../system";

/** A job: a command in a terminal, set running — the run mark solid. From the ops set. */
export const JobsIcon: Icon = {
  name: "JobsIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2.5 }],
    ["path", { d: "M7 9l2.5 2.25L7 13.5" }],
    ["path", { d: "M12.5 11v5.5l4.75-2.75Z", ...SOLID }],
  ],
};

export default JobsIcon;
