import type { Icon } from "../types";
import { SOLID } from "../system";

/** Minecraft: a block with a creeper's face, the face the mark. From the files set. */
export const MinecraftIcon: Icon = {
  name: "MinecraftIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 2 }],
    ["path", { d: "M6.5 7h3.5v3.5H6.5ZM14 7h3.5v3.5H14ZM10 10.5h4V13h1.5v4.5H14V16h-4v1.5H8.5V13H10Z", ...SOLID }],
  ],
};

export default MinecraftIcon;
