import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** H6: a sixth-level heading. From the text set. */
export const Heading6Icon: Icon = {
  name: "Heading6Icon",
  node: [["path", { d: "M3.5 5.5v13M11.5 5.5v13M3.5 12h8", ...SOLID_STROKE }], ["path", { d: "M19.5 10.5c-2.8 0-4.5 2.3-4.5 5.1a2.6 2.6 0 1 0 2.6-2.6c-1.1 0-2 .5-2.5 1.3" }]],
};

export default Heading6Icon;
