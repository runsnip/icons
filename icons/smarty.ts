import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Smarty: braces round a thickened dollar sign. From the files set. */
export const SmartyIcon: Icon = {
  name: "SmartyIcon",
  node: [
    ["path", { d: "M8 4.5c-1.5 0-2 .7-2 2v2.5c0 1-.8 3-2 3 1.2 0 2 2 2 3v2.5c0 1.3.5 2 2 2M16 4.5c1.5 0 2 .7 2 2v2.5c0 1 .8 3 2 3-1.2 0-2 2-2 3v2.5c0 1.3-.5 2-2 2" }],
    ["path", { d: "M14 9.3c-.4-.6-1.1-.9-2-.9-1.2 0-2 .6-2 1.5 0 2.1 4 1.1 4 3.3 0 .9-.8 1.5-2 1.5-.9 0-1.6-.3-2-.9M12 7v1.4M12 14.7v1.8", ...SOLID_STROKE }],
  ],
};

export default SmartyIcon;
