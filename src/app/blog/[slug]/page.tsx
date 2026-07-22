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

  // Internal linking: same-category siblings first, then most recent, so no post is a dead end.
  const all = getAllPosts().filter((p) => p.slug !== slug);
  const sameCat = all.filter((p) => post.category && p.category === post.category);
  const related = [...sameCat, ...all.filter((p) => !sameCat.includes(p))].slice(0, 6);

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
        <p className="text-sm text-slate-700 mb-4">We compare every major VPN so you don&apos;t have to. See our top picks for 2026.</p>
        <Link
          href="/reviews"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-xl transition-colors text-sm"
        >
          See Top VPN Reviews
        </Link>
      </div>

      {related.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Related reading</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {related.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="block bg-white rounded-lg border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-blue-300 hover:text-blue-700 transition-colors"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-10 bg-slate-50 border border-slate-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Popular guides</h2>
        <ul className="space-y-2">
          <li><Link href="/best-vpn" className="text-blue-700 font-semibold hover:underline">Best VPNs of 2026 →</Link></li>
          <li><Link href="/reviews/nordvpn" className="text-blue-700 font-semibold hover:underline">NordVPN review →</Link></li>
          <li><Link href="/reviews/surfshark" className="text-blue-700 font-semibold hover:underline">Surfshark review →</Link></li>
          <li><Link href="/compare" className="text-blue-700 font-semibold hover:underline">Compare VPNs side by side →</Link></li>
        </ul>
      </div>
    </div>
  );
}
