import type { Icon } from "../types";
import { SOLID } from "../system";

/** Favicon: a browser window, the site's small star inside it the mark. From the files set. */
export const FaviconIcon: Icon = {
  name: "FaviconIcon",
  node: [
    ["path", { d: "M3.5 9h17" }],
    ["rect", { x: 3.5, y: 4.5, width: 17, height: 15, rx: 2.5 }],
    ["path", { d: "M12 11L12.94 13.31L15.42 13.49L13.52 15.09L14.12 17.51L12 16.2L9.88 17.51L10.48 15.09L8.58 13.49L11.06 13.31Z", ...SOLID }],
  ],
};

export default FaviconIcon;
