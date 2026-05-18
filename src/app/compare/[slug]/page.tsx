import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { vpns, getVPN } from "@/data/vpns";

export async function generateStaticParams() {
  const pairs = [];
  for (let i = 0; i < vpns.length; i++) {
    for (let j = i + 1; j < vpns.length; j++) {
      pairs.push({ slug: `${vpns[i].slug}-vs-${vpns[j].slug}` });
    }
  }
  return pairs;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const [aSlug, bSlug] = slug.split("-vs-");
  const a = getVPN(aSlug);
  const b = getVPN(bSlug);
  if (!a || !b) return {};
  return {
    title: `${a.name} vs ${b.name} 2026 — Which VPN Is Better?`,
    description: `${a.name} vs ${b.name}: we compare speed, price, privacy, and streaming to find the winner.`,
  };
}

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [aSlug, bSlug] = slug.split("-vs-");
  const a = getVPN(aSlug);
  const b = getVPN(bSlug);
  if (!a || !b) notFound();

  const specLabels: Record<string, string> = {
    servers: "Servers",
    countries: "Countries",
    devices: "Simultaneous Devices",
    protocol: "Protocol",
    logs: "Logs Policy",
    moneyBack: "Money-Back Guarantee",
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        {" / "}
        <Link href="/compare" className="hover:text-blue-600">Compare</Link>
        {" / "}
        <span>{a.name} vs {b.name}</span>
      </div>

      <h1 className="text-3xl font-bold mb-3">{a.name} vs {b.name} (2026)</h1>
      <p className="text-slate-600 mb-10">
        We test both VPNs across speed, privacy, streaming, and pricing so you can pick the right one without guessing.
      </p>

      {/* Side-by-side summary */}
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        {[a, b].map((vpn) => (
          <div key={vpn.slug} className="border border-slate-200 rounded-2xl p-6">
            {vpn.badge && (
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-2">
                {vpn.badge}
              </span>
            )}
            <div className="font-bold text-xl mb-1">{vpn.name}</div>
            <div className="flex items-center gap-1 mb-2">
              <span className="text-amber-400">{"★".repeat(Math.floor(vpn.rating))}</span>
              <span className="text-sm">{vpn.rating}/5</span>
            </div>
            <p className="text-sm text-slate-600 mb-4">{vpn.tagline}</p>
            <div className="font-medium text-sm mb-4">{vpn.price}</div>
            <a
              href={vpn.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
            >
              Get {vpn.name}
            </a>
          </div>
        ))}
      </div>

      {/* Spec comparison table */}
      <div className="border border-slate-200 rounded-2xl overflow-hidden mb-10">
        <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
          <div className="px-5 py-3 font-semibold text-slate-600 text-sm">Feature</div>
          <div className="px-5 py-3 font-bold text-center">{a.name}</div>
          <div className="px-5 py-3 font-bold text-center">{b.name}</div>
        </div>
        {Object.entries(specLabels).map(([key, label]) => (
          <div key={key} className="grid grid-cols-3 border-b border-slate-100 last:border-b-0">
            <div className="px-5 py-3 text-sm text-slate-500">{label}</div>
            <div className="px-5 py-3 text-sm font-medium text-center">{a.specs[key as keyof typeof a.specs]}</div>
            <div className="px-5 py-3 text-sm font-medium text-center">{b.specs[key as keyof typeof b.specs]}</div>
          </div>
        ))}
      </div>

      {/* Verdict */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
        <div className="font-bold text-blue-900 mb-2">Our Verdict</div>
        <p className="text-slate-700 leading-relaxed">
          Both {a.name} and {b.name} are strong choices, but they suit different users.
          {" "}{a.name} is better rated overall ({a.rating}/5) and is our top recommendation if you want {a.bestFor[0].replace("-", " ")}.
          {" "}{b.name} wins on {b.bestFor[0].replace("-", " ")} and is priced at {b.price}.
          Check our full reviews below for the detailed breakdown.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {[a, b].map((vpn) => (
          <Link
            key={vpn.slug}
            href={`/reviews/${vpn.slug}`}
            className="border border-slate-200 rounded-xl p-4 hover:border-blue-300 transition-colors group text-center"
          >
            <div className="font-semibold group-hover:text-blue-600 transition-colors">Read Full {vpn.name} Review →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
