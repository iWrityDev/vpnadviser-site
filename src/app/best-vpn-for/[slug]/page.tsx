import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { useCases } from "@/data/usecases";
import { vpns, getVPN } from "@/data/vpns";

export async function generateStaticParams() {
  return useCases.map((uc) => ({ slug: uc.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const uc = useCases.find((u) => u.slug === slug);
  if (!uc) return {};
  return {
    title: `${uc.title} 2026 — Expert Tested`,
    description: `${uc.description}. Compared using published specifications and independent audits.`,
  };
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const uc = useCases.find((u) => u.slug === slug);
  if (!uc) notFound();
  const topVpn = getVPN(uc.topPick);
  const others = vpns.filter((v) => v.slug !== uc.topPick).slice(0, 3);

  const useCaseLabel = slug.replace(/-/g, " ");

  const faqs = topVpn
    ? [
        {
          question: `What is the best VPN for ${useCaseLabel}?`,
          answer: `${topVpn.name} is our top pick for ${useCaseLabel}. ${topVpn.description.split(".")[0]}.`,
        },
        {
          question: `Is ${topVpn.name} good for ${useCaseLabel}?`,
          answer: topVpn.description.split(".")[0] + ".",
        },
        {
          question: `How much does ${topVpn.name} cost?`,
          answer: `${topVpn.name} starts at ${topVpn.price} with a ${topVpn.specs.moneyBack} money-back guarantee.`,
        },
      ]
    : [];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vpnadviser.com" },
      { "@type": "ListItem", position: 2, name: "Best VPN For", item: "https://www.vpnadviser.com/best-vpn-for" },
      { "@type": "ListItem", position: 3, name: uc.title, item: `https://www.vpnadviser.com/best-vpn-for/${uc.slug}` },
    ],
  };

  const faqSchema = faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <div className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        {" / "}
        <Link href="/best-vpn-for" className="hover:text-blue-600">Best VPN For</Link>
        {" / "}
        <span>{uc.title}</span>
      </div>

      <div className="text-4xl mb-4">{uc.icon}</div>
      <h1 className="text-3xl font-bold mb-3">{uc.title} (2026)</h1>
      <p className="text-slate-600 mb-10 text-lg">{uc.description}</p>

      {topVpn && (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
          <div className="text-sm font-semibold text-green-700 mb-2">OUR TOP PICK</div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <div className="font-bold text-xl mb-1">{topVpn.name}</div>
              <div className="flex items-center gap-1 mb-2">
                <span className="text-amber-400">{"★".repeat(Math.floor(topVpn.rating))}</span>
                <span className="text-sm">{topVpn.rating}/5</span>
              </div>
              <p className="text-sm text-slate-700">{topVpn.tagline}</p>
            </div>
            <div className="flex flex-col gap-2 shrink-0">
              <a
                href={topVpn.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors text-sm text-center"
              >
                Get {topVpn.name}
              </a>
              <Link href={`/reviews/${topVpn.slug}`} className="text-center text-sm text-blue-600 hover:underline">
                Read review
              </Link>
            </div>
          </div>
        </div>
      )}

      <h2 className="text-xl font-bold mb-4">Runner-Up Options</h2>
      <div className="grid sm:grid-cols-3 gap-4 mb-12">
        {others.map((v) => (
          <Link
            key={v.slug}
            href={`/reviews/${v.slug}`}
            className="border border-slate-200 rounded-xl p-4 hover:border-blue-300 transition-colors group"
          >
            <div className="font-semibold group-hover:text-blue-600 transition-colors">{v.name}</div>
            <div className="text-xs text-slate-500 mt-1">{v.price}</div>
            <div className="text-xs text-amber-500 mt-1">{"★".repeat(Math.floor(v.rating))} {v.rating}/5</div>
          </Link>
        ))}
      </div>

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">Common Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="border border-slate-200 rounded-xl overflow-hidden group">
                <summary className="flex items-center justify-between px-5 py-4 font-medium cursor-pointer select-none hover:bg-slate-50 transition-colors list-none">
                  {faq.question}
                  <span className="text-slate-400 text-sm ml-4 shrink-0 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-slate-700 leading-relaxed border-t border-slate-100">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      )}

      <div className="border-t border-slate-200 pt-8">
        <h2 className="text-xl font-bold mb-4">Explore Other Use Cases</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {useCases.filter((u) => u.slug !== slug).slice(0, 6).map((u) => (
            <Link key={u.slug} href={`/best-vpn-for/${u.slug}`} className="text-sm text-blue-600 hover:underline flex items-center gap-1">
              <span>{u.icon}</span> {u.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
