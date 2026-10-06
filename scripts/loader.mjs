/* Resolves what TypeScript lets the source omit — a file's extension, a directory's index.ts —
   so node --test runs the sources as they are; @runsnip/* resolve to the sources of the workspace's
   packages through their "@runsnip/source" export condition. Development only: not published. */
import { pathToFileURL, fileURLToPath } from "node:url";
import { dirname, resolve as resolvePath } from "node:path";
import { statSync } from "node:fs";

const withExtension = (base) => [base, `${base}.ts`, `${base}/index.ts`].find((path) => statSync(path, { throwIfNoEntry: false })?.isFile());

export async function resolve(specifier, context, next) {
  if (/^\.\.?\//.test(specifier) && !/\.[a-z]+$/i.test(specifier) && context.parentURL?.startsWith("file:")) {
    const found = withExtension(resolvePath(dirname(fileURLToPath(context.parentURL)), specifier));
    if (found) return next(pathToFileURL(found).href, context);
  }
  return next(specifier, context);
}
