import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { countries, getCountry } from "@/data/countries";
import { getVPN } from "@/data/vpns";
import { PRIORITY_COUNTRIES } from "@/data/priority";

// Only markets with real VPN demand. Others 404 instead of adding thin template pages.
export const dynamicParams = false;

export async function generateStaticParams() {
  return PRIORITY_COUNTRIES.map((country) => ({ country }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country: slug } = await params;
  const country = getCountry(slug);
  if (!country) return {};
  return {
    title: `Best VPN for ${country.name} 2026 — What Actually Works`,
    description: `${country.description.slice(0, 155)}`,
  };
}

const censorshipLabel: Record<string, { label: string; color: string }> = {
  none: { label: "No Censorship", color: "text-green-700 bg-green-50 border-green-200" },
  low: { label: "Low Censorship", color: "text-green-700 bg-green-50 border-green-200" },
  moderate: { label: "Moderate Censorship", color: "text-yellow-700 bg-yellow-50 border-yellow-200" },
  high: { label: "High Censorship", color: "text-orange-700 bg-orange-50 border-orange-200" },
  extreme: { label: "Extreme Censorship", color: "text-red-700 bg-red-50 border-red-200" },
};

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country: slug } = await params;
  const country = getCountry(slug);
  if (!country) notFound();

  const topVpn = getVPN(country.topPick);
  const runnerUp = getVPN(country.runnerUp);
  const census = censorshipLabel[country.censorship];

  // Only link to countries we still generate, otherwise these point at 404s.
  const nearby = countries
    .filter(
      (c) =>
        c.region === country.region &&
        c.slug !== country.slug &&
        PRIORITY_COUNTRIES.includes(c.slug)
    )
    .slice(0, 4);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        {" / "}
        <Link href="/vpn-for" className="hover:text-blue-600">VPN by Country</Link>
        {" / "}
        <span>{country.name}</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-5xl">{country.flag}</span>
        <h1 className="text-3xl font-bold">Best VPN for {country.name} (2026)</h1>
      </div>
      <p className="text-slate-600 text-lg mb-8">{country.description}</p>

      {/* Status badges */}
      <div className="flex flex-wrap gap-3 mb-10">
        <span className={`border rounded-full px-4 py-1.5 text-sm font-medium ${census.color}`}>
          {census.label}
        </span>
        <span className={`border rounded-full px-4 py-1.5 text-sm font-medium ${
          country.vpnLegal === true
            ? "text-green-700 bg-green-50 border-green-200"
            : country.vpnLegal === "gray"
            ? "text-yellow-700 bg-yellow-50 border-yellow-200"
            : "text-red-700 bg-red-50 border-red-200"
        }`}>
          VPN use: {country.vpnLegal === true ? "Legal" : country.vpnLegal === "gray" ? "Gray area" : "Illegal"}
        </span>
        <span className="border border-slate-200 rounded-full px-4 py-1.5 text-sm font-medium text-slate-600 bg-slate-50">
          Internet freedom: {country.internetFreedom}
        </span>
      </div>

      {/* Top pick */}
      {topVpn && (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
          <div className="text-sm font-semibold text-green-700 mb-3">
            TOP PICK FOR {country.name.toUpperCase()}
          </div>
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

      {/* Runner-up */}
      {runnerUp && (
        <div className="border border-slate-200 rounded-2xl p-5 mb-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex-1">
            <div className="text-xs font-semibold text-slate-500 mb-1">RUNNER-UP</div>
            <div className="font-bold text-lg">{runnerUp.name}</div>
            <p className="text-sm text-slate-600">{runnerUp.tagline}</p>
          </div>
          <div className="flex flex-col gap-2 shrink-0">
            <a
              href={runnerUp.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-5 py-2 rounded-xl transition-colors text-sm text-center"
            >
              Get {runnerUp.name}
            </a>
            <Link href={`/reviews/${runnerUp.slug}`} className="text-center text-sm text-blue-600 hover:underline">
              Read review
            </Link>
          </div>
        </div>
      )}

      {/* Why you need a VPN in this country */}
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4">Why Use a VPN in {country.name}?</h2>
        <ul className="space-y-3">
          {country.whyUseVpn.map((reason) => (
            <li key={reason} className="flex gap-3 text-slate-700">
              <span className="text-blue-500 shrink-0 mt-0.5">✓</span>
              {reason}
            </li>
          ))}
        </ul>
      </div>

      {/* Local streaming services */}
      {country.localServices.length > 0 && (
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Local Streaming Services in {country.name}</h2>
          <p className="text-slate-600 mb-3 text-sm">
            A VPN also lets you access these local services when you travel abroad.
          </p>
          <div className="flex flex-wrap gap-2">
            {country.localServices.map((service) => (
              <span key={service} className="bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full">
                {service}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Main concern callout */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10">
        <div className="font-semibold text-amber-800 mb-1">Main Privacy Concern</div>
        <p className="text-sm text-amber-900">{country.concerns}</p>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 text-center mb-12">
        <div className="font-bold text-xl mb-2">Get Protected in {country.name}</div>
        <p className="text-blue-100 mb-5">
          {topVpn ? `${topVpn.name} is our top pick — ${topVpn.specs.moneyBack} money-back guarantee.` : "Our top pick comes with a 30-day money-back guarantee."}
        </p>
        {topVpn && (
          <a
            href={topVpn.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="inline-block bg-white text-blue-700 font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
          >
            Get {topVpn.name} — {topVpn.price}
          </a>
        )}
      </div>

      {/* Nearby countries */}
      {nearby.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-4">Other Countries in {country.region}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {nearby.map((c) => (
              <Link
                key={c.slug}
                href={`/vpn-for/${c.slug}`}
                className="border border-slate-200 rounded-xl p-4 hover:border-blue-300 transition-colors group flex items-center gap-3"
              >
                <span className="text-2xl">{c.flag}</span>
                <div>
                  <div className="font-semibold group-hover:text-blue-600 transition-colors">{c.name}</div>
                  <div className="text-xs text-slate-500 capitalize">{c.censorship} censorship</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
