import type { Icon } from "../types";
import { SOLID } from "../system";

/** A merge field: a field's place between angle marks, as a merge field is marked in the text. From the insert set. */
export const MergeFieldIcon: Icon = {
  name: "MergeFieldIcon",
  node: [
    ["path", { d: "M7 8.5 3.5 12 7 15.5M17 8.5l3.5 3.5-3.5 3.5" }],
    ["rect", { x: 9.5, y: 9.5, width: 5, height: 5, rx: 1, ...SOLID }],
  ],
};

export default MergeFieldIcon;
