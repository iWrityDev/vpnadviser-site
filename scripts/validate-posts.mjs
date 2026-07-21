// Prebuild guard for generated content.
//
// The SEO automation writes JSON posts every 2 days. It has historically emitted
// malformed JSON, UTF-8 BOMs, and three different field schemas. Those failures were
// SILENT: posts.ts swallowed parse errors, so broken posts simply never rendered, and a
// single missing date crashed the whole build at the sitemap step.
//
// This guard fails the build loudly instead, naming the offending file.

import fs from "node:fs";
import path from "node:path";

const DIRS = ["content/blog", "content/guides"];
const errors = [];
const warnings = [];
let total = 0;

for (const dir of DIRS) {
  if (!fs.existsSync(dir)) continue;
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".json"))) {
    const p = path.join(dir, file);
    let raw = fs.readFileSync(p, "utf8");
    total++;

    if (raw.charCodeAt(0) === 0xfeff) {
      warnings.push(`${p}: has a UTF-8 BOM (strip it; JSON.parse rejects it)`);
      raw = raw.slice(1);
    }

    let post;
    try {
      post = JSON.parse(raw);
    } catch (e) {
      errors.push(`${p}: invalid JSON -> ${e.message}`);
      continue;
    }

    const slug = post.slug || post.id || file.replace(/\.json$/, "");
    if (typeof slug !== "string" || !slug.trim()) {
      errors.push(`${p}: no usable slug (checked slug, id, filename)`);
    }
    if (typeof post.title !== "string" || !post.title.trim()) {
      errors.push(`${p}: missing title`);
    }

    const dateVal = post.date || post.publishDate || post.updatedDate;
    if (!dateVal || isNaN(new Date(dateVal).getTime())) {
      errors.push(`${p}: missing/unparseable date (breaks sitemap prerender)`);
    }

    const content = typeof post.content === "string" ? post.content : "";
    if (content.length < 300) {
      warnings.push(`${p}: very thin content (${content.length} chars)`);
    }
  }
}

if (warnings.length) {
  console.warn(`\n[validate-posts] ${warnings.length} warning(s):`);
  warnings.forEach((w) => console.warn("  ! " + w));
}

if (errors.length) {
  console.error(`\n[validate-posts] BUILD BLOCKED — ${errors.length} invalid file(s):`);
  errors.forEach((e) => console.error("  x " + e));
  console.error("\nFix the file(s) above, or remove them from content/, then rebuild.\n");
  process.exit(1);
}

console.log(`[validate-posts] ok — ${total} content files valid`);
