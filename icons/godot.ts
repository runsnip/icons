import type { Icon } from "../types";
import { SOLID } from "../system";

/** Godot: a robot's head, its eyes the mark. From the files set. */
export const GodotIcon: Icon = {
  name: "GodotIcon",
  node: [
    ["path", { d: "M4.5 9.5C4.5 6.5 8 4.5 12 4.5s7.5 2 7.5 5v6.5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3ZM10 16h4" }],
    ["path", { d: "M7.25 12a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 1 0-3.5 0ZM13.25 12a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 1 0-3.5 0Z", ...SOLID }],
  ],
};

export default GodotIcon;
