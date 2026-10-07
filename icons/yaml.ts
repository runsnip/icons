import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** YAML: indented list items, their dashes the mark. From the files set. */
export const YamlIcon: Icon = {
  name: "YamlIcon",
  node: [
    ["path", { d: "M10 6.5h9.5M14 12h5.5M14 17.5h5.5" }],
    ["path", { d: "M4.5 6.5H7M8.5 12H11M8.5 17.5H11", ...SOLID_STROKE }],
  ],
};

export default YamlIcon;
