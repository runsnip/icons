import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Elixir: the drop, its highlight the mark. From the files set. */
export const ElixirIcon: Icon = {
  name: "ElixirIcon",
  node: [
    ["path", { d: "M12 3.5C9 7.5 6.5 11 6.5 15a5.5 5.5 0 0 0 11 0c0-4-2.5-7.5-5.5-11.5Z" }],
    ["path", { d: "M9.5 15a2.5 2.5 0 0 0 2.5 2.5", ...SOLID_STROKE }],
  ],
};

export default ElixirIcon;
