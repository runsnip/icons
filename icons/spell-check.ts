import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Spell check: ABC with a tick beneath. From the insert set. */
export const SpellCheckIcon: Icon = {
  name: "SpellCheckIcon",
  node: [
    ["path", { d: "M3.5 11 6 4l2.5 7M4.4 8.8h3.2M10 4v7h2.3a1.75 1.75 0 0 0 0-3.5H10h2a1.75 1.75 0 0 0 0-3.5ZM20.5 5.2a3.5 3.5 0 1 0 0 4.6" }],
    ["path", { d: "M7.5 16.5l2.5 2.5 6-5.5", ...SOLID_STROKE }],
  ],
};

export default SpellCheckIcon;
