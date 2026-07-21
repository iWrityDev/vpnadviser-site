import fs from "fs";
import path from "path";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  content: string;
};

const postsDir = path.join(process.cwd(), "content", "blog");

// Fallback used when a generated post has a missing or unparseable date.
// Without this, one bad date crashes the whole sitemap prerender.
const DATE_FALLBACK = "2026-01-01";

export function isValidDate(value: unknown): boolean {
  if (typeof value !== "string" || value.trim() === "") return false;
  return !isNaN(new Date(value).getTime());
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".json"));
  return files
    .map((file) => {
      try {
        let raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
        // The content generator sometimes writes a UTF-8 BOM, which JSON.parse rejects.
        // Stripping it here keeps those posts visible instead of silently dropping them.
        if (raw.charCodeAt(0) === 0xfeff) raw = raw.slice(1);
        const post = JSON.parse(raw) as Post & {
          publishDate?: string;
          updatedDate?: string;
          id?: string;
          excerpt?: string;
        };
        // The generator has emitted several schemas over time. Normalise them all so a
        // variant field name can never silently drop a post or crash the build.
        if (!isValidDate(post.date)) {
          if (isValidDate(post.publishDate)) post.date = post.publishDate as string;
          else if (isValidDate(post.updatedDate)) post.date = post.updatedDate as string;
          else post.date = DATE_FALLBACK;
        }
        // Slug: fall back to `id`, then to the filename (which is the slug by convention).
        if (typeof post.slug !== "string" || !post.slug.trim()) {
          post.slug =
            typeof post.id === "string" && post.id.trim()
              ? post.id
              : file.replace(/\.json$/, "");
        }
        if (typeof post.description !== "string" || !post.description.trim()) {
          post.description = typeof post.excerpt === "string" ? post.excerpt : "";
        }
        return post;
      } catch {
        return null;
      }
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime()) as Post[];
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
