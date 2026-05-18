import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/data/posts";

export const metadata: Metadata = {
  title: "VPN Blog 2026 — Tips, Guides & News",
  description: "Expert VPN tips, privacy guides, and security news. Stay ahead of ISP tracking, geo-blocks, and data leaks.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-3">VPN Blog</h1>
      <p className="text-slate-600 mb-10">Tips, guides, and news on online privacy and VPNs — written by people who actually test them.</p>

      {posts.length === 0 ? (
        <div className="text-center py-20 text-slate-400">
          <div className="text-5xl mb-4">📝</div>
          <p>No posts yet. Check back soon.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-sm transition-all group"
            >
              {post.category && (
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-3 capitalize">
                  {post.category}
                </span>
              )}
              <h2 className="font-bold text-lg leading-snug group-hover:text-blue-600 transition-colors mb-2">
                {post.title}
              </h2>
              {post.description && (
                <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">{post.description}</p>
              )}
              <div className="text-xs text-slate-400">
                {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
