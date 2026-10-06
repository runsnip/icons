import type { Icon } from "../types";
import { SOLID } from "../system";

/** A bookmark: a ribbon hanging into a page. From the insert set. */
export const BookmarkIcon: Icon = {
  name: "BookmarkIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 2.5 }],
    ["path", { d: "M12 3.5h5v9l-2.5-2-2.5 2Z", ...SOLID }],
  ],
};

export default BookmarkIcon;
