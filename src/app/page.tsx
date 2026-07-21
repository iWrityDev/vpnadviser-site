import Link from "next/link";
import type { Metadata } from "next";
import { vpns } from "@/data/vpns";
import { useCases } from "@/data/usecases";
import { getAllPosts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Best VPN 2026 — Independent Reviews & Comparisons | VPN Adviser",
  description:
    "Find the best VPN of 2026. Independent comparisons based on published specifications, third-party security audits, and public benchmark data. Compare NordVPN, ExpressVPN, Surfshark, and more.",
};

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);
  const topVpns = vpns.slice(0, 5);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 text-white py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Updated 2026 · Independent comparison
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
            Find the Best VPN for Your Needs
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
            We compare every major VPN on speed, privacy, and streaming using published specifications, independent audits, and public benchmark data. No sponsored rankings.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="#top-picks"
              className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-7 py-3 rounded-xl transition-colors"
            >
              See Top Picks
            </Link>
            <Link
              href="/compare"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3 rounded-xl transition-colors border border-white/20"
            >
              Compare VPNs
            </Link>
          </div>
        </div>
      </section>

      {/* Top Picks Table */}
      <section id="top-picks" className="py-14 px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold mb-2">Best VPNs of 2026</h2>
          <p className="text-slate-600 mb-8">Ranked by our independent testing across speed, privacy, streaming, and value.</p>

          <div className="space-y-4">
            {topVpns.map((vpn, i) => (
              <div key={vpn.slug} className="border border-slate-200 rounded-2xl p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="w-8 h-8 flex items-center justify-center font-bold text-slate-400 text-lg shrink-0">
                    #{i + 1}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-lg">{vpn.name}</span>
                      {vpn.badge && (
                        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                          {vpn.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-slate-600 mt-0.5 truncate">{vpn.tagline}</div>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-amber-400">{"★".repeat(Math.floor(vpn.rating))}</span>
                      <span className="text-sm text-slate-500">{vpn.rating}/5</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-sm font-medium text-slate-700">{vpn.price}</span>
                  <a
                    href={vpn.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors whitespace-nowrap"
                  >
                    Get Deal
                  </a>
                  <Link
                    href={`/reviews/${vpn.slug}`}
                    className="text-sm text-blue-600 hover:underline whitespace-nowrap"
                  >
                    Read review
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold mb-2">Find the Best VPN For Your Use Case</h2>
          <p className="text-slate-600 mb-8">Each use case has different priorities. We break it down.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {useCases.map((uc) => (
              <Link
                key={uc.slug}
                href={`/best-vpn-for/${uc.slug}`}
                className="bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                <div className="text-2xl mb-2">{uc.icon}</div>
                <div className="font-semibold text-sm group-hover:text-blue-600 transition-colors">{uc.title}</div>
                <div className="text-xs text-slate-500 mt-1 leading-snug">{uc.description}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-14 px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold mb-8 text-center">Why Trust VPN Adviser?</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { icon: "🔬", title: "Evidence-based comparisons", body: "We compare providers on documented features, published pricing, jurisdiction, and the findings of independent third-party security audits." },
              { icon: "🚫", title: "No paid rankings", body: "Affiliate commissions never influence placement. If a provider scores poorly on the criteria above, it ranks low regardless of commission rate." },
              { icon: "📅", title: "Updated regularly", body: "VPN policies, prices, and audit results change. We review our rankings against the latest published information to keep them current." },
            ].map((item) => (
              <div key={item.title} className="text-center px-4">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="font-semibold mb-2">{item.title}</div>
                <p className="text-sm text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      {posts.length > 0 && (
        <section className="py-14 px-4 bg-slate-50">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Latest from the Blog</h2>
              <Link href="/blog" className="text-sm text-blue-600 hover:underline">View all →</Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition-all group"
                >
                  <div className="text-xs text-slate-500 mb-2">{post.category} · {post.date}</div>
                  <div className="font-semibold group-hover:text-blue-600 transition-colors leading-snug mb-2">{post.title}</div>
                  <div className="text-sm text-slate-600 line-clamp-2">{post.description}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
