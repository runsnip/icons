import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Heading 1: H1. From the text set. */
export const Heading1Icon: Icon = {
  name: "Heading1Icon",
  node: [["path", { d: "M3.5 5.5v13M11.5 5.5v13M3.5 12h8", ...SOLID_STROKE }], ["path", { d: "M15.5 12.5l3.5-2.5v8.5" }]],
};

export default Heading1Icon;
