import {
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  renameSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { parseDocument } from "yaml";

const contentDir = path.resolve(process.cwd(), "content/blog");
const mediaDir = path.resolve(process.cwd(), "public/blog-media");
const maxBytes = 16 * 1024 * 1024;
const today = new Intl.DateTimeFormat("sv-SE", {
  timeZone: "Asia/Bangkok",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date());

function heroes() {
  const selected = new Map();
  for (const filename of readdirSync(contentDir)
    .filter((name) => name.endsWith(".mdx"))
    .sort()) {
    const file = path.join(contentDir, filename);
    try {
      const source = readFileSync(file, "utf8");
      const frontmatter = /^\uFEFF?---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(
        source,
      );
      if (!frontmatter) throw new Error("missing YAML frontmatter");
      const document = parseDocument(frontmatter[1], { uniqueKeys: true });
      if (document.errors.length)
        throw new Error(
          document.errors.map((error) => error.message).join("; "),
        );
      const metadata = document.toJS({ maxAliasCount: 20 });
      if (metadata.draft === true || String(metadata.published) > today)
        continue;
      if (!metadata.hero?.credit || !metadata.hero.sourceUrl)
        throw new Error("published article needs a credited hero");
      const url = new URL(metadata.hero.src);
      if (
        url.protocol !== "https:" ||
        url.hostname !== "assets.mimir.business" ||
        !/^\/assets\/.+\.[a-f0-9]{8,64}\.[a-z0-9]+$/i.test(url.pathname) ||
        url.port ||
        url.username ||
        url.password ||
        url.search ||
        url.hash
      ) {
        throw new Error(
          "hero URL must use an immutable hashed image on the approved asset host: " +
            metadata.hero.src,
        );
      }
      const owner = new URL(metadata.hero.sourceUrl);
      if (owner.protocol !== "https:" || owner.username || owner.password)
        throw new Error("hero sourceUrl must be HTTPS");
      if (!selected.has(url.href))
        selected.set(url.href, { file, referer: owner.origin + "/" });
    } catch (error) {
      throw new Error(
        file + ": " + (error instanceof Error ? error.message : String(error)),
      );
    }
  }
  return selected;
}

async function copyHero(url, { file, referer }) {
  const target = path.join(mediaDir, path.basename(new URL(url).pathname));
  if (existsSync(target)) return;
  try {
    const response = await fetch(url, {
      headers: { Referer: referer },
      redirect: "error",
    });
    if (!response.ok) throw new Error("HTTP " + response.status);
    if (
      !response.headers.get("content-type")?.toLowerCase().startsWith("image/")
    )
      throw new Error("response Content-Type is not image/*");
    if (Number(response.headers.get("content-length")) > maxBytes)
      throw new Error("image exceeds 16 MiB");
    if (!response.body) throw new Error("response has no image body");
    const reader = response.body.getReader();
    const chunks = [];
    let bytes = 0;
    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        bytes += value.byteLength;
        if (bytes > maxBytes) throw new Error("image exceeds 16 MiB");
        chunks.push(value);
      }
    } finally {
      await reader.cancel();
    }
    if (bytes === 0) throw new Error("image body is empty");
    const temporary = target + "." + process.pid + ".tmp";
    try {
      writeFileSync(temporary, Buffer.concat(chunks));
      renameSync(temporary, target);
    } catch (error) {
      if (existsSync(temporary)) unlinkSync(temporary);
      throw error;
    }
  } catch (error) {
    throw new Error(
      file +
        " hero " +
        url +
        ": " +
        (error instanceof Error ? error.message : String(error)),
    );
  }
}

async function main() {
  const selected = heroes();
  mkdirSync(mediaDir, { recursive: true });
  for (const entry of selected) await copyHero(...entry);
  console.log("Blog social images ready: " + selected.size + " unique heroes.");
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
