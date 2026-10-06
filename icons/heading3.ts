import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Heading 3: H3. From the text set. */
export const Heading3Icon: Icon = {
  name: "Heading3Icon",
  node: [["path", { d: "M3.5 5.5v13M11.5 5.5v13M3.5 12h8", ...SOLID_STROKE }], ["path", { d: "M15 10.5h5.5l-3 3.3a2.5 2.5 0 1 1-2.6 3.6" }]],
};

export default Heading3Icon;
