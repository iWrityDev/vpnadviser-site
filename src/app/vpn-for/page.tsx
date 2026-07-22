import Link from "next/link";
import type { Metadata } from "next";
import { countries } from "@/data/countries";
import { PRIORITY_COUNTRIES } from "@/data/priority";

export const metadata: Metadata = {
  title: "Best VPN by Country 2026 — Every Country Covered",
  description: "Find the best VPN for your country. We cover 60+ countries with local streaming, censorship, and privacy advice.",
};

const regionOrder = ["Europe", "Americas", "Oceania", "Asia", "Middle East", "Africa"];

function groupByRegion(list: typeof countries) {
  const map: Record<string, typeof countries> = {};
  for (const c of list) {
    if (!map[c.region]) map[c.region] = [];
    map[c.region].push(c);
  }
  return map;
}

const censorshipColor: Record<string, string> = {
  none: "bg-green-100 text-green-700",
  low: "bg-green-100 text-green-700",
  moderate: "bg-yellow-100 text-yellow-700",
  high: "bg-orange-100 text-orange-700",
  extreme: "bg-red-100 text-red-700",
};

export default function VpnForPage() {
  const grouped = groupByRegion(countries.filter((c) => PRIORITY_COUNTRIES.includes(c.slug)));

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-3">Best VPN by Country</h1>
      <p className="text-slate-600 mb-10">
        Every country has different censorship levels, surveillance laws, and streaming libraries. Pick your country for tailored advice.
      </p>

      {regionOrder.filter((r) => grouped[r]).map((region) => (
        <div key={region} className="mb-12">
          <h2 className="text-xl font-bold mb-4 text-slate-800">{region}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {grouped[region].map((country) => (
              <Link
                key={country.slug}
                href={`/vpn-for/${country.slug}`}
                className="border border-slate-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{country.flag}</span>
                  <span className="font-semibold group-hover:text-blue-600 transition-colors">{country.name}</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full capitalize ${censorshipColor[country.censorship]}`}>
                    {country.censorship} censorship
                  </span>
                  {country.vpnLegal === true && (
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">VPN legal</span>
                  )}
                  {country.vpnLegal === "gray" && (
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">VPN gray area</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
