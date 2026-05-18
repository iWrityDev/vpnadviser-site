import Link from "next/link";
import type { Metadata } from "next";
import { useCases } from "@/data/usecases";

export const metadata: Metadata = {
  title: "Best VPN For Every Use Case 2026",
  description: "Find the best VPN for your specific needs — Netflix, torrenting, gaming, iPhone, China, and more.",
};

export default function BestVpnForPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-3">Best VPN For Every Use Case</h1>
      <p className="text-slate-600 mb-10">Not all VPNs are equal for every task. Pick your use case to see our top pick with full reasoning.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {useCases.map((uc) => (
          <Link
            key={uc.slug}
            href={`/best-vpn-for/${uc.slug}`}
            className="border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-sm transition-all group"
          >
            <div className="text-3xl mb-3">{uc.icon}</div>
            <div className="font-bold text-lg group-hover:text-blue-600 transition-colors mb-1">{uc.title}</div>
            <p className="text-sm text-slate-600 leading-relaxed">{uc.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
