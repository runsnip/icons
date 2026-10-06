import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A light bulb drawn in outline: an idea, where the filled bulb would weigh too much. From the ui set. */
export const LightbulbOutlineIcon: Icon = {
  name: "LightbulbOutlineIcon",
  node: [
    ["path", { d: "M12 4.5a5.3 5.3 0 0 0-3.2 9.5c.5.5.9 1.2.9 2h4.6c0-.8.4-1.5.9-2A5.3 5.3 0 0 0 12 4.5Z" }],
    ["path", { d: "M10 18.5h4M10.75 20.5h2.5", ...SOLID_STROKE }],
  ],
};

export default LightbulbOutlineIcon;
