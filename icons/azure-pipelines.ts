import type { Icon } from "../types";
import { SOLID } from "../system";

/** Three stages on a line, the last one filled: a pipeline. From the files set. */
export const AzurePipelinesIcon: Icon = {
  name: "AzurePipelinesIcon",
  node: [
    ["circle", { cx: 5.8, cy: 12, r: 2.3 }],
    ["circle", { cx: 12, cy: 12, r: 2.3 }],
    ["path", { d: "M8.1 12h1.6M14.3 12h1.6" }],
    ["circle", { cx: 18.2, cy: 12, r: 2.3, ...SOLID }],
  ],
};

export default AzurePipelinesIcon;
