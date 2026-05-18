import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About VPN Adviser — How We Test & Rate VPNs",
  description: "VPN Adviser is an independent review site. We test VPNs ourselves and earn a commission if you buy through our links — at no extra cost to you.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">About VPN Adviser</h1>

      <div className="prose prose-slate max-w-none">
        <p className="text-lg text-slate-600 mb-8">
          VPN Adviser is an independent website that tests and reviews VPN services. We don't take money for rankings. We don't publish paid reviews. Every score you see on this site reflects real testing.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">How We Test VPNs</h2>
        <p className="text-slate-700 mb-4">
          Each VPN on this site goes through a consistent evaluation process:
        </p>
        <ul className="space-y-2 text-slate-700 mb-6 list-none pl-0">
          {[
            "Speed tests across multiple servers and regions",
            "DNS and WebRTC leak checks",
            "Streaming performance (Netflix, BBC iPlayer, Disney+)",
            "Privacy policy and jurisdiction review",
            "App usability on Windows, Mac, iOS, and Android",
            "Customer support response time and quality",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-blue-600 shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mt-8 mb-3">How We Make Money</h2>
        <p className="text-slate-700 mb-4">
          When you click an affiliate link on VPN Adviser and buy a VPN subscription, we earn a commission from the VPN provider. You pay exactly the same price either way.
        </p>
        <p className="text-slate-700 mb-4">
          This is how most review sites work. The difference is that we don't let commission rates influence our rankings. Our top pick earns a modest commission; some of the VPNs we don't recommend pay more. We'd rather give you accurate information.
        </p>
        <p className="text-slate-700 mb-6">
          Read our full <Link href="/disclosure" className="text-blue-600 hover:underline">affiliate disclosure</Link> for details.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Why We Built This</h2>
        <p className="text-slate-700 mb-4">
          Most VPN review sites are owned by the VPN companies themselves, or take paid placements to push VPNs that pay more. We found that frustrating, so we built a resource we'd actually use ourselves.
        </p>
        <p className="text-slate-700 mb-6">
          VPN Adviser is a small operation. We publish reviews, comparisons, and guides based on real usage. If you spot something wrong, or think we've missed something important, get in touch.
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mt-8">
          <div className="font-bold mb-1">Contact</div>
          <p className="text-sm text-slate-600">
            Have a question, correction, or press inquiry? Reach us at{" "}
            <a href="mailto:hello@vpnadviser.com" className="text-blue-600 hover:underline">
              hello@vpnadviser.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
