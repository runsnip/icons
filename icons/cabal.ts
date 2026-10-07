import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Cabal: Haskell's lambda, the mark, in a square. From the files set. */
export const CabalIcon: Icon = {
  name: "CabalIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 3 }],
    ["path", { d: "M8 7.5h1.5l6 9.5M12.2 12 8.5 17", ...SOLID_STROKE }],
  ],
};

export default CabalIcon;
