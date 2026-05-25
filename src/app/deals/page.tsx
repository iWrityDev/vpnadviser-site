import type { Metadata } from "next";
import Link from "next/link";
import { deals } from "@/data/deals";

export const metadata: Metadata = {
  title: "VPN Deals & Coupon Codes 2026 — Up to 86% Off",
  description:
    "Verified VPN coupon codes and deals for May 2026. Save up to 86% on NordVPN, ExpressVPN, Surfshark, and more. All discounts tested and confirmed.",
};

export default function DealsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10">
        <div className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-2">May 2026</div>
        <h1 className="text-3xl font-bold mb-3">VPN Deals &amp; Coupon Codes</h1>
        <p className="text-slate-600 max-w-2xl leading-relaxed">
          Every deal on this page has been tested by our team. Most VPN discounts apply automatically
          through our links — no code needed. Where a coupon code exists, we list it. All prices
          include the 2-year rate unless noted.
        </p>
      </div>

      <div className="grid gap-5">
        {deals.map((deal) => (
          <div
            key={deal.slug}
            className="border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-start hover:border-blue-300 transition-colors"
          >
            {/* Left: info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <h2 className="text-xl font-bold">{deal.vpnName}</h2>
                {deal.badge && (
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {deal.badge}
                  </span>
                )}
              </div>
              <p className="text-slate-600 text-sm mb-3">{deal.tagline}</p>

              <div className="flex items-baseline gap-3 mb-3 flex-wrap">
                <span className="text-3xl font-extrabold text-slate-900">{deal.currentPrice}</span>
                <span className="text-slate-400 line-through text-sm">{deal.normalPrice}</span>
                <span className="bg-green-50 border border-green-200 text-green-700 font-bold text-sm px-3 py-0.5 rounded-full">
                  {deal.discount}
                </span>
                {deal.extraMonths && (
                  <span className="text-blue-600 text-sm font-semibold">{deal.extraMonths}</span>
                )}
              </div>

              <div className="flex items-center gap-4 text-sm text-slate-600 flex-wrap">
                <span>📅 {deal.planLength}</span>
                <span>🔄 {deal.moneyBack} guarantee</span>
                {deal.couponCode && (
                  <span className="font-mono bg-slate-100 border border-slate-200 px-2.5 py-1 rounded text-slate-800 font-semibold">
                    {deal.couponCode}
                  </span>
                )}
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col gap-2 sm:min-w-[180px]">
              <a
                href={deal.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="block text-center bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
              >
                Claim Deal →
              </a>
              <Link
                href={`/deals/${deal.slug}`}
                className="block text-center border border-slate-200 hover:border-slate-300 text-slate-700 font-medium px-6 py-2 rounded-xl transition-colors text-sm"
              >
                How to Claim
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Info section */}
      <div className="mt-14 bg-blue-50 border border-blue-200 rounded-2xl p-8">
        <h2 className="text-xl font-bold mb-3">How VPN deals actually work</h2>
        <div className="grid sm:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
          <div>
            <div className="font-semibold mb-1">Most discounts are link-based</div>
            <p>VPNs set their promotional pricing at checkout depending on where you arrive from. Clicking our links locks in the current deal automatically — no code required for most VPNs.</p>
          </div>
          <div>
            <div className="font-semibold mb-1">Deals expire and change</div>
            <p>VPN prices fluctuate based on promotions. We update this page regularly, but prices can change without notice. The money-back guarantee means you can always test before committing.</p>
          </div>
          <div>
            <div className="font-semibold mb-1">Renewal prices are higher</div>
            <p>The discounted rate applies to your first billing period. When your subscription renews, it typically reverts to the standard price. Set a calendar reminder before your renewal date.</p>
          </div>
          <div>
            <div className="font-semibold mb-1">Test before you commit</div>
            <p>Every VPN on this page offers at least a 30-day money-back guarantee. Subscribe, test speeds and streaming on your actual connection, then decide. Getting a refund is straightforward.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
