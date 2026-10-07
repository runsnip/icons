import type { Icon } from "../types";
import { SOLID } from "../system";

/** Groovy: a star in orbit, the star the mark. From the files set. */
export const GroovyIcon: Icon = {
  name: "GroovyIcon",
  node: [
    ["ellipse", { cx: 12, cy: 14, rx: 8.5, ry: 4 }],
    ["path", { d: "M12 5L13.23 8.3L16.76 8.45L14 10.65L14.94 14.05L12 12.1L9.06 14.05L10 10.65L7.24 8.45L10.77 8.3Z", ...SOLID }],
  ],
};

export default GroovyIcon;
