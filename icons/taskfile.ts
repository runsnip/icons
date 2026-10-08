import type { Icon } from "../types";
import { SOLID } from "../system";

/** Taskfile: a cube, its top face the mark. From the files set. */
export const TaskfileIcon: Icon = {
  name: "TaskfileIcon",
  node: [
    ["path", { d: "M12 3.5l7.5 4v9L12 20.5l-7.5-4v-9Z" }],
    ["path", { d: "M4.5 7.5 12 11.5l7.5-4M12 11.5v9" }],
    ["path", { d: "M12 3.5l7.5 4-7.5 4-7.5-4Z", ...SOLID }],
  ],
};

export default TaskfileIcon;
