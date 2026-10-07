import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** TOML: square brackets, the T between them the mark. From the files set. */
export const TomlIcon: Icon = {
  name: "TomlIcon",
  node: [
    ["path", { d: "M7.5 5H5v14h2.5M16.5 5H19v14h-2.5" }],
    ["path", { d: "M8.75 9h6.5M12 9v7", ...SOLID_STROKE }],
  ],
};

export default TomlIcon;
