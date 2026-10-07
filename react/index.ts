/**
 * @runsnip/icons/react — a component per icon, with the props of an `<svg>` and the set's own (`size`, `color`,
 * `viewBox`). Hookless, so they render in Server Components. `Icon` draws any of them by name, and the kinds of file
 * and folder in their forms (`<Icon file="index.ts" />`, `<Icon folder="src" open />`). `DynamicIcon` (./react/dynamic) loads one by name.
 */
export * from "./icons";
export { createIcon, type IconComponent, type IconProps } from "./create";
export { Icon } from "./icon";
