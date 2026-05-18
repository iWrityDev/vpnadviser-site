import Link from "next/link";
import type { Metadata } from "next";
import { vpns } from "@/data/vpns";

export const metadata: Metadata = {
  title: "VPN Comparisons 2026 — Side-by-Side VPN Tests",
  description: "Compare the top VPNs side by side. Speed, price, privacy, and features all in one place.",
};

function getComparisons() {
  const pairs = [];
  for (let i = 0; i < vpns.length; i++) {
    for (let j = i + 1; j < vpns.length; j++) {
      pairs.push({ a: vpns[i], b: vpns[j] });
    }
  }
  return pairs;
}

export default function ComparePage() {
  const comparisons = getComparisons();
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-3">VPN Comparisons</h1>
      <p className="text-slate-600 mb-10">Not sure which VPN to pick? Read our head-to-head comparisons to see which one wins for your use case.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {comparisons.map(({ a, b }) => (
          <Link
            key={`${a.slug}-vs-${b.slug}`}
            href={`/compare/${a.slug}-vs-${b.slug}`}
            className="border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-sm transition-all group"
          >
            <div className="font-semibold group-hover:text-blue-600 transition-colors">
              {a.name} vs {b.name}
            </div>
            <div className="text-sm text-slate-500 mt-1">
              {a.price} vs {b.price}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
