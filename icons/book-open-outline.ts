import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** An open book in outline, its spine the mark: BookOpenIcon unfilled. From the ui set. */
export const BookOpenOutlineIcon: Icon = {
  name: "BookOpenOutlineIcon",
  node: [
    ["path", { d: "M12 6.5c-2-1.5-5-2-8.5-2v14c3.5 0 6.5.5 8.5 2" }],
    ["path", { d: "M12 6.5c2-1.5 5-2 8.5-2v14c-3.5 0-6.5.5-8.5 2" }],
    ["path", { d: "M12 6.5v14", ...SOLID_STROKE }],
  ],
};

export default BookOpenOutlineIcon;
