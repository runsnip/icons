import type { Icon } from "../types";
import { SOLID_STROKE } from "../system";

/** Insert an image: a picture with a plus. From the insert set. */
export const ImagePlusIcon: Icon = {
  name: "ImagePlusIcon",
  node: [
    ["path", { d: "M20.5 11V6A2.5 2.5 0 0 0 18 3.5H6A2.5 2.5 0 0 0 3.5 6v12A2.5 2.5 0 0 0 6 20.5h5M3.5 16l4.5-4.5 3.5 3.5" }],
    ["path", { d: "M17 13.5v7M13.5 17h7", ...SOLID_STROKE }],
  ],
};

export default ImagePlusIcon;
