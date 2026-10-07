import type { Icon } from "../types";
import { SOLID } from "../system";

/** Histoire: two story cards, the play sign the mark. From the files set. */
export const HistoireIcon: Icon = {
  name: "HistoireIcon",
  node: [
    ["path", { d: "M7.5 7.5v-2a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" }],
    ["rect", { x: 3.5, y: 7.5, width: 13, height: 13, rx: 2 }],
    ["path", { d: "M8.5 11v6l5-3Z", ...SOLID }],
  ],
};

export default HistoireIcon;
