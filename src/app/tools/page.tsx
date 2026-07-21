import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";

export const metadata: Metadata = {
  title: "Privacy & Security Tools",
  description:
    "A VPN protects your connection, but it doesn't stop malware, data brokers, or weak passwords. These tools fill those gaps. Reviewed and rated by our team.",
};

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-3">
          Privacy &amp; Security Tools
        </h1>
        <p className="text-slate-600 max-w-2xl leading-relaxed">
          A VPN protects your network connection, but it does not stop malware from infecting your
          device, data brokers from selling your personal details, or weak passwords from getting
          you hacked. These tools cover those gaps.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <div
            key={tool.slug}
            className="border border-slate-200 rounded-2xl p-6 flex flex-col hover:border-blue-300 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-full">
                {tool.category}
              </span>
              {tool.badge && (
                <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {tool.badge}
                </span>
              )}
            </div>

            <h2 className="text-xl font-bold mb-1">{tool.name}</h2>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed flex-1">{tool.tagline}</p>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <span className="text-amber-400">{"★".repeat(Math.floor(tool.rating))}</span>
                <span className="font-bold text-sm">{tool.rating}</span>
                <span className="text-slate-400 text-sm">/5</span>
              </div>
              <span className="text-slate-400">|</span>
              <span className="text-sm font-medium text-slate-700">{tool.price}</span>
            </div>

            <Link
              href={`/tools/${tool.slug}`}
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl transition-colors text-sm"
            >
              Read Review
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-14 bg-slate-50 border border-slate-200 rounded-2xl p-8">
        <h2 className="text-xl font-bold mb-3">Why you need more than a VPN</h2>
        <p className="text-slate-600 leading-relaxed max-w-3xl">
          A VPN encrypts your internet traffic and hides your IP address. That is valuable, but it
          does not scan files you download, remove your home address from data broker websites, or
          generate unique passwords for every account you use. These tools handle exactly those
          problems. Used together with a VPN, they cover most of the common attack surfaces for
          everyday users.
        </p>
      </div>
    </div>
  );
}
