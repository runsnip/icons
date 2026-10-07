import type { Icon } from "../types";
import { SOLID } from "../system";

/** Haxe: a square on its point, the upright square in it the mark. From the files set. */
export const HaxeIcon: Icon = {
  name: "HaxeIcon",
  node: [
    ["path", { d: "M12 3.5 20.5 12 12 20.5 3.5 12Z" }],
    ["rect", { x: 9.5, y: 9.5, width: 5, height: 5, rx: 0.5, ...SOLID }],
  ],
};

export default HaxeIcon;
