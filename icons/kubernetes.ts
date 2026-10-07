import type { Icon } from "../types";
import { SOLID } from "../system";

/** Kubernetes: the helm in its heptagon, the hub the mark. From the files set. */
export const KubernetesIcon: Icon = {
  name: "KubernetesIcon",
  node: [
    ["path", { d: "M12 3.9L18.57 7.06L20.19 14.17L15.64 19.87L8.36 19.87L3.81 14.17L5.43 7.06Z" }],
    ["path", { d: "M12 8.9L12 6.3M14.66 10.18L16.69 8.56M15.31 13.06L17.85 13.64M13.48 15.36L14.6 17.71M10.52 15.36L9.4 17.71M8.69 13.06L6.15 13.64M9.34 10.18L7.31 8.56" }],
    ["circle", { cx: 12, cy: 12.3, r: 2.2, ...SOLID }],
  ],
};

export default KubernetesIcon;
