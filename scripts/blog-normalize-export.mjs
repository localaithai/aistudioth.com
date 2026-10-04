import { existsSync, mkdirSync, readdirSync, renameSync } from "node:fs";
import path from "node:path";

const indexFile = path.resolve("out/blog.html");
const blogDir = path.resolve("out/blog");
if (!existsSync(indexFile))
  throw new Error("Blog export is missing: " + indexFile);
mkdirSync(blogDir, { recursive: true });
for (const filename of readdirSync(blogDir).sort()) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*\.html$/.test(filename)) continue;
  const directory = path.join(blogDir, filename.slice(0, -5));
  mkdirSync(directory, { recursive: true });
  renameSync(path.join(blogDir, filename), path.join(directory, "index.html"));
}

renameSync(indexFile, path.join(blogDir, "index.html"));
