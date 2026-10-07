import type { Icon } from "../types";
import { SOLID } from "../system";

/** Handlebars: braces round a moustache, the moustache the mark. From the files set. */
export const HandlebarsIcon: Icon = {
  name: "HandlebarsIcon",
  node: [
    ["path", { d: "M6 5H5.5A1.5 1.5 0 0 0 4 6.5v3.5L3.5 12l.5 2v3.5A1.5 1.5 0 0 0 5.5 19H6M18 5h.5A1.5 1.5 0 0 1 20 6.5v3.5l.5 2-.5 2v3.5a1.5 1.5 0 0 1-1.5 1.5H18" }],
    ["path", { d: "M12 11.2c-1.3-1.6-3.6-1.8-4.6-.3-.4.6-.4 1.4 0 1.9.5-.6 1.1-.5 1.6 0 1 1.1 2.2 1 3-.3.8 1.3 2 1.4 3 .3.5-.5 1.1-.6 1.6 0 .4-.5.4-1.3 0-1.9-1-1.5-3.3-1.3-4.6.3Z", ...SOLID }],
  ],
};

export default HandlebarsIcon;
