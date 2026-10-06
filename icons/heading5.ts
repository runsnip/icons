import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** H5: a fifth-level heading. From the text set. */
export const Heading5Icon: Icon = {
  name: "Heading5Icon",
  node: [["path", { d: "M3.5 5.5v13M11.5 5.5v13M3.5 12h8", ...SOLID_STROKE }], ["path", { d: "M20 10.5h-4.5l-.5 3.4c.6-.4 1.3-.6 2.1-.6a2.6 2.6 0 1 1-2.5 3.6" }]],
};

export default Heading5Icon;
