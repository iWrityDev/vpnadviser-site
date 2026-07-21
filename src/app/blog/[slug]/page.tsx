import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPost } from "@/data/posts";
import { marked } from "marked";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — VPN Adviser`,
    description: post.description ?? `${post.title}. Expert VPN advice and privacy guides.`,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const html = marked.parse(post.content ?? "");

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        {" / "}
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        {" / "}
        <span>{post.title}</span>
      </div>

      {post.category && (
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-4 capitalize">
          {post.category}
        </span>
      )}
      <h1 className="text-3xl font-bold mb-3 leading-tight">{post.title}</h1>
      <div className="text-sm text-slate-400 mb-10">
        {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
      </div>

      <article
        className="prose prose-slate max-w-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-2xl p-6">
        <div className="font-bold text-blue-900 mb-1">Want expert VPN recommendations?</div>
        <p className="text-sm text-slate-700 mb-4">We compare every major VPN so you don't have to. See our top picks for 2026.</p>
        <Link
          href="/reviews"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-xl transition-colors text-sm"
        >
          See Top VPN Reviews
        </Link>
      </div>
    </div>
  );
}
