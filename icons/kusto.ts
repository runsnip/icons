import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Kusto (KQL): a lens over a chart, the handle the mark. From the files set. */
export const KustoIcon: Icon = {
  name: "KustoIcon",
  node: [
    ["circle", { cx: 10, cy: 10, r: 6 }],
    ["path", { d: "M8.5 12.5v-2M11.5 12.5V8" }],
    ["path", { d: "M14.5 14.5l5 5", ...SOLID_STROKE }],
  ],
};

export default KustoIcon;
