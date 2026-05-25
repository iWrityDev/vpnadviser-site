import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { tools, getTool } from "@/data/tools";

export async function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  return {
    title: `${tool.name} Review 2026 — Is It Worth It?`,
    description: `${tool.tagline}. Read our independent ${tool.name} review covering features, pricing, and who it is best for.`,
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const others = tools.filter((t) => t.slug !== slug).slice(0, 3);

  const faqs = [
    {
      question: `Is ${tool.name} worth it?`,
      answer: `${tool.name} scores ${tool.rating}/5 in our testing. ${tool.tagline}. For most users looking for ${tool.bestFor[0].replace(/-/g, " ")}, it delivers solid value.`,
    },
    {
      question: `What does ${tool.name} cost?`,
      answer: `${tool.name} starts at ${tool.price}. Check the provider's site for the latest pricing and any active discounts.`,
    },
    {
      question: `What is ${tool.name} best for?`,
      answer: `${tool.name} is best for: ${tool.bestFor.map((b) => b.replace(/-/g, " ")).join(", ")}.`,
    },
  ];

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: tool.name,
      applicationCategory: "SecurityApplication",
      url: tool.affiliateUrl,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: tool.rating,
      bestRating: "5",
      worstRating: "1",
    },
    author: { "@type": "Organization", name: "VPN Adviser" },
    publisher: { "@type": "Organization", name: "VPN Adviser", url: "https://vpnadviser.com" },
    name: `${tool.name} Review 2026`,
    reviewBody: tool.description,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://vpnadviser.com" },
      { "@type": "ListItem", position: 2, name: "Tools", item: "https://vpnadviser.com/tools" },
      { "@type": "ListItem", position: 3, name: `${tool.name} Review`, item: `https://vpnadviser.com/tools/${tool.slug}` },
    ],
  };

  const faqSchema = {
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
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        {" / "}
        <Link href="/tools" className="hover:text-blue-600">
          Tools
        </Link>
        {" / "}
        <span>{tool.name}</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="inline-block bg-slate-100 text-slate-600 text-sm font-medium px-3 py-1 rounded-full">
            {tool.category}
          </span>
          {tool.badge && (
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
              {tool.badge}
            </span>
          )}
        </div>
        <h1 className="text-3xl font-bold mb-2">{tool.name} Review 2026</h1>
        <p className="text-lg text-slate-600 mb-4">{tool.tagline}</p>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1">
            <span className="text-amber-400 text-xl">
              {"★".repeat(Math.floor(tool.rating))}
            </span>
            <span className="font-bold text-lg">{tool.rating}</span>
            <span className="text-slate-500">/5</span>
          </div>
          <span className="text-slate-400">|</span>
          <span className="font-medium">{tool.price}</span>
          <a
            href={tool.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl transition-colors text-sm"
          >
            Get {tool.name} →
          </a>
        </div>
      </div>

      {/* Quick Verdict */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
        <div className="font-bold text-blue-900 mb-2">Quick Verdict</div>
        <p className="text-slate-700 leading-relaxed">{tool.description}</p>
      </div>

      {/* Pros / Cons */}
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <div className="border border-green-200 rounded-2xl p-5 bg-green-50">
          <div className="font-bold text-green-800 mb-3">Pros</div>
          <ul className="space-y-2">
            {tool.pros.map((p) => (
              <li key={p} className="flex gap-2 text-sm text-slate-700">
                <span className="text-green-600 shrink-0">✓</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-red-200 rounded-2xl p-5 bg-red-50">
          <div className="font-bold text-red-800 mb-3">Cons</div>
          <ul className="space-y-2">
            {tool.cons.map((c) => (
              <li key={c} className="flex gap-2 text-sm text-slate-700">
                <span className="text-red-500 shrink-0">✗</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Best For */}
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-3">Best For</h2>
        <div className="flex flex-wrap gap-2">
          {tool.bestFor.map((tag) => (
            <span
              key={tag}
              className="bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full capitalize"
            >
              {tag.replace(/-/g, " ")}
            </span>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
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

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 text-center mb-12">
        <div className="font-bold text-xl mb-2">Ready to try {tool.name}?</div>
        <p className="text-blue-100 mb-5">
          Starting at {tool.price}. Check the latest pricing and offers on their site.
        </p>
        <a
          href={tool.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
        >
          Get {tool.name} — {tool.price}
        </a>
      </div>

      {/* Compare other tools */}
      <div>
        <h2 className="text-xl font-bold mb-4">Compare Other Tools</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {others.map((t) => (
            <Link
              key={t.slug}
              href={`/tools/${t.slug}`}
              className="border border-slate-200 rounded-xl p-4 hover:border-blue-300 transition-colors group"
            >
              <div className="font-semibold group-hover:text-blue-600 transition-colors">
                {t.name}
              </div>
              <div className="text-xs text-slate-500 mt-1">{t.category}</div>
              <div className="text-xs text-slate-500 mt-0.5">{t.price}</div>
              <div className="text-xs text-amber-500 mt-1">
                {"★".repeat(Math.floor(t.rating))} {t.rating}/5
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
