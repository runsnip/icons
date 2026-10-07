import type { Icon } from "../types";
import { SOLID } from "../system";

/** A workspace's run configuration: a panel of settings lines and a filled play mark. From the files set. */
export const RunConfigIcon: Icon = {
  name: "RunConfigIcon",
  node: [
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2.5 }],
    ["path", { d: "M7 9h2.5M7 12h2.5M7 15h2.5" }],
    ["path", { d: "M12.5 9v6l4.5-3Z", ...SOLID }],
  ],
};

export default RunConfigIcon;
