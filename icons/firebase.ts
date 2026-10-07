import type { Icon } from "../types";
import { SOLID } from "../system";

/** Firebase: a flame, its inner flame the mark. From the files set. */
export const FirebaseIcon: Icon = {
  name: "FirebaseIcon",
  node: [
    ["path", { d: "M12 20.5c-3.6 0-6.5-2.6-6.5-6.2 0-4.3 3.6-6.3 4.6-10.8 3.6 2.2 8.4 6.4 8.4 10.8 0 3.6-2.9 6.2-6.5 6.2Z" }],
    ["path", { d: "M12 18c-1.4 0-2.5-1-2.5-2.4 0-1.6 1.4-2.6 2-4.6 1.6 1 3 2.6 3 4.6 0 1.4-1.1 2.4-2.5 2.4Z", ...SOLID }],
  ],
};

export default FirebaseIcon;
