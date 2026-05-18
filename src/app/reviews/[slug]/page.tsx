import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { vpns, getVPN } from "@/data/vpns";

export async function generateStaticParams() {
  return vpns.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const vpn = getVPN(slug);
  if (!vpn) return {};
  return {
    title: `${vpn.name} Review 2026 — Is It Worth It?`,
    description: `${vpn.tagline}. Read our independent ${vpn.name} review covering speed, privacy, streaming, and pricing.`,
  };
}

export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vpn = getVPN(slug);
  if (!vpn) notFound();

  const others = vpns.filter((v) => v.slug !== slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        {" / "}
        <Link href="/reviews" className="hover:text-blue-600">Reviews</Link>
        {" / "}
        <span>{vpn.name}</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        {vpn.badge && (
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">
            {vpn.badge}
          </span>
        )}
        <h1 className="text-3xl font-bold mb-2">{vpn.name} Review 2026</h1>
        <p className="text-lg text-slate-600 mb-4">{vpn.tagline}</p>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1">
            <span className="text-amber-400 text-xl">{"★".repeat(Math.floor(vpn.rating))}</span>
            <span className="font-bold text-lg">{vpn.rating}</span>
            <span className="text-slate-500">/5</span>
          </div>
          <span className="text-slate-400">|</span>
          <span className="font-medium">{vpn.price}</span>
          <a
            href={vpn.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl transition-colors text-sm"
          >
            Get {vpn.name} →
          </a>
        </div>
      </div>

      {/* Quick Verdict */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
        <div className="font-bold text-blue-900 mb-2">Quick Verdict</div>
        <p className="text-slate-700 leading-relaxed">{vpn.description}</p>
      </div>

      {/* Pros / Cons */}
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <div className="border border-green-200 rounded-2xl p-5 bg-green-50">
          <div className="font-bold text-green-800 mb-3">Pros</div>
          <ul className="space-y-2">
            {vpn.pros.map((p) => (
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
            {vpn.cons.map((c) => (
              <li key={c} className="flex gap-2 text-sm text-slate-700">
                <span className="text-red-500 shrink-0">✗</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Specs Table */}
      <div className="border border-slate-200 rounded-2xl overflow-hidden mb-10">
        <div className="bg-slate-50 px-5 py-3 font-bold border-b border-slate-200">Key Specs</div>
        <div className="divide-y divide-slate-100">
          {Object.entries({
            Servers: vpn.specs.servers,
            Countries: vpn.specs.countries,
            Devices: vpn.specs.devices,
            Protocol: vpn.specs.protocol,
            "Logs Policy": vpn.specs.logs,
            "Money-Back": vpn.specs.moneyBack,
          }).map(([k, v]) => (
            <div key={k} className="flex px-5 py-3 text-sm">
              <span className="text-slate-500 w-36 shrink-0">{k}</span>
              <span className="font-medium">{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Best For */}
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-3">Best For</h2>
        <div className="flex flex-wrap gap-2">
          {vpn.bestFor.map((tag) => (
            <span key={tag} className="bg-slate-100 text-slate-700 text-sm px-3 py-1 rounded-full capitalize">
              {tag.replace("-", " ")}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 text-center mb-12">
        <div className="font-bold text-xl mb-2">Ready to try {vpn.name}?</div>
        <p className="text-blue-100 mb-5">Get started with a {vpn.specs.moneyBack} money-back guarantee.</p>
        <a
          href={vpn.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
        >
          Get {vpn.name} — {vpn.price}
        </a>
      </div>

      {/* Other Reviews */}
      <div>
        <h2 className="text-xl font-bold mb-4">Compare Other VPNs</h2>
        <div className="grid sm:grid-cols-3 gap-4">
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
      </div>
    </div>
  );
}
