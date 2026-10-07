import type { Icon } from "../types";
import { SOLID } from "../system";

/** RAML: an API's resources nested, each resource's point the mark. From the files set. */
export const RamlIcon: Icon = {
  name: "RamlIcon",
  node: [
    ["path", { d: "M7.5 6.5h12.5M11.5 12h8.5M11.5 17.5h8.5" }],
    ["circle", { cx: 5, cy: 6.5, r: 1.5, ...SOLID }],
    ["circle", { cx: 9, cy: 12, r: 1.5, ...SOLID }],
    ["circle", { cx: 9, cy: 17.5, r: 1.5, ...SOLID }],
  ],
};

export default RamlIcon;
