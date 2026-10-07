import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** JSON Schema: curly braces around a tick, the tick the mark. From the files set. */
export const JsonSchemaIcon: Icon = {
  name: "JsonSchemaIcon",
  node: [
    ["path", { d: "M8.5 4.5h-1a2 2 0 0 0-2 2V10l-2 2 2 2v3.5a2 2 0 0 0 2 2h1M15.5 4.5h1a2 2 0 0 1 2 2V10l2 2-2 2v3.5a2 2 0 0 1-2 2h-1" }],
    ["path", { d: "M9 12.2l2 2 4-4.2", ...SOLID_STROKE }],
  ],
};

export default JsonSchemaIcon;
