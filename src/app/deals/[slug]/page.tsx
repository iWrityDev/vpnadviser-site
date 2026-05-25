import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { deals, getDeal } from "@/data/deals";
import { getVPN } from "@/data/vpns";

export async function generateStaticParams() {
  return deals.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const deal = getDeal(slug);
  if (!deal) return {};
  return {
    title: `${deal.vpnName} Coupon Code 2026 — ${deal.discount}`,
    description: `${deal.highlight} ${deal.moneyBack} money-back guarantee. Verified May 2026.`,
  };
}

export default async function DealPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const deal = getDeal(slug);
  if (!deal) notFound();

  const vpn = getVPN(slug);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vpnadviser.com" },
      { "@type": "ListItem", position: 2, name: "VPN Deals", item: "https://vpnadviser.com/deals" },
      { "@type": "ListItem", position: 3, name: `${deal.vpnName} Coupon`, item: `https://vpnadviser.com/deals/${deal.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Does the ${deal.vpnName} coupon code still work in 2026?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: deal.couponCode
            ? `Yes. The code ${deal.couponCode} was verified in May 2026. Discount applies at checkout.`
            : `${deal.vpnName} doesn't use a coupon code — the discount applies automatically when you click our link. No code needed.`,
        },
      },
      {
        "@type": "Question",
        name: `What is the cheapest ${deal.vpnName} plan?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The cheapest ${deal.vpnName} plan is the ${deal.planLength} at ${deal.currentPrice}, compared to ${deal.normalPrice} per month on a monthly subscription.`,
        },
      },
      {
        "@type": "Question",
        name: `Does ${deal.vpnName} have a money-back guarantee?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. ${deal.vpnName} offers a ${deal.moneyBack} money-back guarantee on all plans. You can get a full refund if you're not satisfied.`,
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="mx-auto max-w-4xl px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-500 mb-6 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link href="/deals" className="hover:text-blue-600">VPN Deals</Link>
          <span>/</span>
          <span className="text-slate-900">{deal.vpnName} Coupon</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="text-blue-600 text-sm font-semibold uppercase tracking-wide mb-2">Verified May 2026</div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            {deal.vpnName} Coupon Code 2026
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">{deal.highlight}</p>
        </div>

        {/* Deal card */}
        <div className="border-2 border-green-400 bg-green-50 rounded-2xl p-6 mb-10">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
            <div>
              <div className="text-green-700 font-bold text-sm uppercase tracking-wide mb-1">
                Best Current Deal
              </div>
              <div className="flex items-baseline gap-3 flex-wrap mb-2">
                <span className="text-4xl font-extrabold text-slate-900">{deal.currentPrice}</span>
                <span className="text-slate-400 line-through">{deal.normalPrice}</span>
                <span className="bg-green-600 text-white font-bold px-3 py-1 rounded-full text-sm">
                  {deal.discount}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-slate-600 flex-wrap">
                <span>📅 {deal.planLength}</span>
                {deal.extraMonths && <span className="text-blue-600 font-semibold">{deal.extraMonths}</span>}
                <span>🔄 {deal.moneyBack} guarantee</span>
              </div>
              {deal.couponCode && (
                <div className="mt-3">
                  <span className="text-sm text-slate-600 mr-2">Coupon code:</span>
                  <span className="font-mono bg-white border-2 border-green-300 text-slate-900 font-bold px-3 py-1.5 rounded-lg text-base tracking-widest">
                    {deal.couponCode}
                  </span>
                </div>
              )}
              {!deal.codeNeeded && (
                <div className="mt-3 text-sm text-green-700 font-medium">
                  ✓ No code needed — discount applies automatically via our link
                </div>
              )}
            </div>
            <a
              href={deal.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="sm:min-w-[180px] text-center bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-colors text-base whitespace-nowrap"
            >
              Claim {deal.discount} →
            </a>
          </div>
        </div>

        {/* How to claim */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-5">How to claim the {deal.vpnName} deal</h2>
          <ol className="space-y-4">
            {deal.steps.map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-slate-700 pt-1 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* VPN quick specs if available */}
        {vpn && (
          <div className="mb-10 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4">What you get with {vpn.name}</h2>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              {Object.entries(vpn.specs).map(([key, val]) => {
                const labels: Record<string, string> = {
                  servers: "Servers",
                  countries: "Countries",
                  devices: "Devices",
                  protocol: "Protocol",
                  logs: "Logs policy",
                  moneyBack: "Money-back",
                };
                return (
                  <div key={key} className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">{labels[key] ?? key}</span>
                    <span className="font-semibold text-slate-900">{val}</span>
                  </div>
                );
              })}
            </div>
            <div className="mt-4">
              <Link
                href={`/reviews/${vpn.slug}`}
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Read our full {vpn.name} review →
              </Link>
            </div>
          </div>
        )}

        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-5">Frequently asked questions</h2>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold mb-2">
                Does the {deal.vpnName} coupon code still work in 2026?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {deal.couponCode
                  ? `Yes. The code ${deal.couponCode} was verified working in May 2026. Enter it at checkout after selecting your plan.`
                  : `${deal.vpnName} doesn't use traditional coupon codes. The discount applies automatically when you visit via our link — no code box to fill in.`}
              </p>
            </div>
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold mb-2">
                What is the cheapest {deal.vpnName} plan?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The {deal.planLength} at {deal.currentPrice} is the lowest price {deal.vpnName} offers. The monthly plan costs {deal.normalPrice}, so committing to a longer plan saves significantly.
              </p>
            </div>
            <div className="border border-slate-200 rounded-xl p-5">
              <h3 className="font-semibold mb-2">
                Does {deal.vpnName} have a money-back guarantee?
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Yes — {deal.vpnName} offers a {deal.moneyBack} money-back guarantee. Buy it, test it on your actual connection, and request a refund if it doesn't perform as expected.
              </p>
            </div>
          </div>
        </div>

        {/* Other deals */}
        <div>
          <h2 className="text-xl font-bold mb-4">Other VPN deals</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {deals
              .filter((d) => d.slug !== deal.slug)
              .slice(0, 3)
              .map((d) => (
                <Link
                  key={d.slug}
                  href={`/deals/${d.slug}`}
                  className="border border-slate-200 rounded-xl p-4 hover:border-blue-300 transition-colors"
                >
                  <div className="font-semibold mb-1">{d.vpnName}</div>
                  <div className="text-green-600 font-bold text-sm mb-1">{d.discount}</div>
                  <div className="text-slate-500 text-sm">{d.currentPrice} · {d.planLength}</div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
