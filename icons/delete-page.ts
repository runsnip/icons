import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** A page with a cross. From the pdf set. */
export const DeletePageIcon: Icon = {
  name: "DeletePageIcon",
  node: [
    ["path", { d: "M14 3.5H7A2.5 2.5 0 0 0 4.5 6v12A2.5 2.5 0 0 0 7 20.5h10a2.5 2.5 0 0 0 2.5-2.5V9Z" }],
    ["path", { d: "M9.5 11.5l5 5M14.5 11.5l-5 5", ...SOLID_STROKE }],
  ],
};

export default DeletePageIcon;
