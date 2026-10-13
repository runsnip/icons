import type { Icon } from "../types";
import { SOLID } from "../system";

/** Logs as they stream: lines of output, the last one still being written, its cursor solid. From the ops set. */
export const LogsIcon: Icon = {
  name: "LogsIcon",
  node: [
    ["path", { d: "M3.5 5h17M3.5 9.5h12M3.5 14h17M3.5 18.5h6" }],
    ["rect", { x: 12, y: 16.5, width: 3.5, height: 4, rx: 0.5, ...SOLID }],
  ],
};

export default LogsIcon;
