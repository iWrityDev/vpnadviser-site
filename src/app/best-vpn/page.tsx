import type { Metadata } from "next";
import Link from "next/link";
import { vpns } from "@/data/vpns";

export const metadata: Metadata = {
  title: "Best VPN 2026 — Top 10 Compared and Ranked",
  description:
    "The best VPNs of 2026 compared on performance, privacy, streaming, and value, using published specifications and independent audits. Independent rankings with no paid placements.",
};

const top10 = vpns.slice(0, 10);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best VPN in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NordVPN is the best VPN in 2026 for most users. It combines fast NordLynx speeds, reliable streaming unblocking, an audited no-logs policy, and 10 device connections at a competitive price.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best free VPN in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ProtonVPN is the best free VPN in 2026. It has no data cap on its free tier, a genuine no-logs policy, and Swiss jurisdiction. Windscribe is a strong runner-up with 10 GB/month free.",
      },
    },
    {
      "@type": "Question",
      name: "Which VPN is best for Netflix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NordVPN is the most consistent VPN for Netflix in 2026. It reliably unblocks Netflix US, UK, Japan, and other regional libraries. ExpressVPN and Surfshark are strong alternatives.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a good VPN cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A good paid VPN costs $2-4 per month on a 2-year plan. Surfshark starts at $1.99/mo, NordVPN at $3.39/mo, and ExpressVPN at $2.79/mo. Avoid free VPNs from unknown providers as they often sell user data.",
      },
    },
  ],
};

const tableOfContents = [
  { id: "top-picks", label: "Top 10 VPNs" },
  { id: "comparison", label: "Head-to-Head Comparison" },
  { id: "how-we-test", label: "How We Compare" },
  { id: "faq", label: "FAQ" },
];

export default function BestVpnPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="mx-auto max-w-4xl px-4 py-10">
        {/* Header */}
        <div className="mb-8">
          <div className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-2">Updated May 2026</div>
          <h1 className="text-4xl font-bold mb-4">Best VPN 2026</h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            We compared 13 VPNs on performance, streaming support, privacy record, and value,
            using published specifications and independent third-party audits. No sponsored
            rankings: our affiliate links come after the verdict, not before it.
          </p>
        </div>

        {/* Quick-pick winner */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <div className="text-blue-700 font-semibold text-sm mb-1">🏆 Best Overall</div>
            <div className="text-2xl font-bold mb-1">NordVPN</div>
            <div className="text-slate-600 text-sm">Fastest speeds · Best streaming · Audited no-logs · 10 devices</div>
          </div>
          <a
            href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=147496&url_id=902"
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
          >
            Get NordVPN — 76% Off →
          </a>
        </div>

        {/* Top 10 list */}
        <h2 id="top-picks" className="text-2xl font-bold mb-6">Top 10 Best VPNs in 2026</h2>
        <div className="space-y-4 mb-12">
          {top10.map((vpn, i) => (
            <div
              key={vpn.slug}
              className="border border-slate-200 rounded-2xl p-5 flex gap-5 items-start hover:border-blue-300 transition-colors"
            >
              <div className="text-3xl font-extrabold text-slate-200 w-10 shrink-0 text-center leading-none pt-1">
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-xl font-bold">{vpn.name}</span>
                  {vpn.badge && (
                    <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                      {vpn.badge}
                    </span>
                  )}
                  <span className="text-amber-400">{"★".repeat(Math.floor(vpn.rating))}</span>
                  <span className="text-sm font-semibold">{vpn.rating}/5</span>
                </div>
                <p className="text-slate-600 text-sm mb-2 leading-relaxed">{vpn.description.slice(0, 160)}…</p>
                <div className="flex items-center gap-4 text-sm flex-wrap">
                  <span className="font-semibold text-slate-900">{vpn.price}</span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-500">{vpn.specs.devices} devices</span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-500">{vpn.specs.moneyBack} guarantee</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                <a
                  href={vpn.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow sponsored"
                  className="text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl transition-colors text-sm whitespace-nowrap"
                >
                  Get Deal
                </a>
                <Link
                  href={`/reviews/${vpn.slug}`}
                  className="text-center border border-slate-200 hover:border-slate-300 text-slate-600 font-medium px-4 py-1.5 rounded-xl transition-colors text-sm"
                >
                  Review
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <h2 id="comparison" className="text-2xl font-bold mb-4">Head-to-Head Comparison</h2>
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left py-3 px-4 font-semibold">VPN</th>
                <th className="text-left py-3 px-4 font-semibold">Price</th>
                <th className="text-left py-3 px-4 font-semibold">Servers</th>
                <th className="text-left py-3 px-4 font-semibold">Devices</th>
                <th className="text-left py-3 px-4 font-semibold">Guarantee</th>
                <th className="text-left py-3 px-4 font-semibold">Rating</th>
              </tr>
            </thead>
            <tbody>
              {top10.map((vpn, i) => (
                <tr key={vpn.slug} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                  <td className="py-3 px-4 font-semibold">
                    <Link href={`/reviews/${vpn.slug}`} className="hover:text-blue-600">
                      {vpn.name}
                    </Link>
                  </td>
                  <td className="py-3 px-4 text-slate-600">{vpn.price}</td>
                  <td className="py-3 px-4 text-slate-600">{vpn.specs.servers}</td>
                  <td className="py-3 px-4 text-slate-600">{vpn.specs.devices}</td>
                  <td className="py-3 px-4 text-slate-600">{vpn.specs.moneyBack}</td>
                  <td className="py-3 px-4 font-semibold">{vpn.rating}/5</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* How we compare */}
        <div id="how-we-test" className="bg-slate-50 border border-slate-200 rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold mb-4">How We Compare VPNs</h2>
          <p className="text-sm text-slate-700 mb-4">
            We are a comparison site, not a testing lab. We do not run our own benchmarks. Every
            rating below comes from publicly verifiable sources.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
            <div>
              <div className="font-semibold mb-1">Performance</div>
              <p>We compare supported protocols (WireGuard/NordLynx, OpenVPN, IKEv2), server counts, and country coverage, alongside performance figures published by independent reviewers.</p>
            </div>
            <div>
              <div className="font-semibold mb-1">Streaming</div>
              <p>We record which streaming services each provider documents support for, and note that platform blocklists change frequently, so support can vary over time.</p>
            </div>
            <div>
              <div className="font-semibold mb-1">Privacy record</div>
              <p>We check jurisdiction, ownership, and privacy policy, and whether no-logs claims have been examined in a published third-party audit (Deloitte, PwC, Securitum, and others) or tested in court.</p>
            </div>
            <div>
              <div className="font-semibold mb-1">Apps and usability</div>
              <p>We compare documented platform support across Windows, macOS, iOS, and Android, plus features such as split tunnelling and kill switch availability per plan.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <h2 id="faq" className="text-2xl font-bold mb-5">Frequently Asked Questions</h2>
        <div className="space-y-4 mb-10">
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold mb-2">{item.name}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
          <div className="text-xl font-bold mb-2">Ready to pick a VPN?</div>
          <p className="text-blue-100 mb-5 text-sm">All VPNs on this page have 30-day money-back guarantees. Try before you commit.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=147496&url_id=902"
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm"
            >
              NordVPN — 76% Off
            </a>
            <Link
              href="/deals"
              className="border border-blue-400 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors text-sm"
            >
              All VPN Deals →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
