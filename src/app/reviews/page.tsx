import Link from "next/link";
import type { Metadata } from "next";
import { vpns } from "@/data/vpns";

export const metadata: Metadata = {
  title: "VPN Reviews 2026 — Expert Tested & Rated",
  description: "In-depth VPN reviews covering speed, privacy, streaming, and pricing. We test every VPN ourselves.",
};

export default function ReviewsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-3">VPN Reviews 2026</h1>
      <p className="text-slate-600 mb-10">Every VPN below is tested by our team for speed, privacy, streaming performance, and value. Updated May 2026.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vpns.map((vpn) => (
          <Link
            key={vpn.slug}
            href={`/reviews/${vpn.slug}`}
            className="border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-sm transition-all group"
          >
            {vpn.badge && (
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
                {vpn.badge}
              </span>
            )}
            <div className="font-bold text-xl mb-1 group-hover:text-blue-600 transition-colors">{vpn.name}</div>
            <div className="flex items-center gap-1 mb-2">
              <span className="text-amber-400">{"★".repeat(Math.floor(vpn.rating))}</span>
              <span className="text-sm text-slate-500">{vpn.rating}/5</span>
            </div>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">{vpn.tagline}</p>
            <div className="text-sm font-medium text-slate-700 mb-4">{vpn.price}</div>
            <div className="text-sm text-blue-600 font-semibold group-hover:underline">Read full review →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
