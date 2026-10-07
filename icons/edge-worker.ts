import type { Icon } from "../types";
import { SOLID } from "../system";

/** Edge workers: a cloud with a bolt falling from it, the bolt the mark. From the files set. */
export const EdgeWorkerIcon: Icon = {
  name: "EdgeWorkerIcon",
  node: [
    ["path", { d: "M7.45 15.5a3.48 3.48 0 0 1-.52-6.97 4.79 4.79 0 0 1 9.32-1.22A4.09 4.09 0 0 1 16.16 15.5" }],
    ["polygon", { points: "13.5,11 9.5,16 12,16 10.5,20.5 15,14.5 12.5,14.5", ...SOLID }],
  ],
};

export default EdgeWorkerIcon;
