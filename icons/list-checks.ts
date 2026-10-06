import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Checklist: a list whose bullets are ticks. From the text set. */
export const ListChecksIcon: Icon = {
  name: "ListChecksIcon",
  node: [["path", { d: "M3.5 7l2 2L9 5M3.5 12.5l2 2L9 10.5M3.5 18l2 2L9 16", ...SOLID_STROKE }], ["path", { d: "M12 7h8.5M12 12.5h8.5M12 18h8.5" }]],
};

export default ListChecksIcon;
