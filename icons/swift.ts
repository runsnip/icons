import type { Icon } from "../types";
import { SOLID } from "../system";

/** Swift: a swift in flight in a square, the bird the mark. From the files set. */
export const SwiftIcon: Icon = {
  name: "SwiftIcon",
  node: [
    ["rect", { x: 3.5, y: 3.5, width: 17, height: 17, rx: 4 }],
    ["path", { d: "M6 14.5c3 2.6 7.3 3.2 10.3 1.7 1-.5 1.9-.2 2.4.4.3-1-.1-2-.8-2.7 1.3-3-.2-6.4-3.1-8.6 1.4 2 1.9 4.3 1.4 6.3-2.6-1.5-5.8-4.2-8.2-6.7 1.4 2.1 3.2 4.2 5 5.9-2.4-1.3-4.7-2.9-6.6-4.6 1.8 2.6 4.4 5 5.9 6-2.3.8-4.9.8-7.6-.5Z", ...SOLID }],
  ],
};

export default SwiftIcon;
