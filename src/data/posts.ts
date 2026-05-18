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

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDir)) return [];
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".json"));
  return files
    .map((file) => {
      try {
        const raw = fs.readFileSync(path.join(postsDir, file), "utf-8");
        return JSON.parse(raw) as Post;
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
