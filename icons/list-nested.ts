import type { Icon } from "../types";
import { SOLID } from "../system";

/** Multilevel list: a list with indented sub items. From the text set. */
export const ListNestedIcon: Icon = {
  name: "ListNestedIcon",
  node: [["circle", { cx: 5, cy: 6.5, r: 1.5, ...SOLID }], ["circle", { cx: 10, cy: 12, r: 1.5, ...SOLID }], ["circle", { cx: 10, cy: 17.5, r: 1.5, ...SOLID }], ["path", { d: "M9.5 6.5h11M14.5 12h6M14.5 17.5h6" }]],
};

export default ListNestedIcon;
