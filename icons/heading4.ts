import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** H4: a fourth-level heading. From the text set. */
export const Heading4Icon: Icon = {
  name: "Heading4Icon",
  node: [["path", { d: "M3.5 5.5v13M11.5 5.5v13M3.5 12h8", ...SOLID_STROKE }], ["path", { d: "M19 18.5V10.5l-4.5 6h6" }]],
};

export default Heading4Icon;
