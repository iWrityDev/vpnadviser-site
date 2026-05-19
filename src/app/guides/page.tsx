import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VPN Guides 2026 — Setup, Privacy & Security",
  description: "Step-by-step VPN guides: how to set up a VPN, hide your IP, unblock Netflix, torrent safely, and stay private online.",
};

const guides = [
  {
    slug: "how-to-set-up-a-vpn",
    title: "How to Set Up a VPN (Any Device)",
    description: "A plain-English walkthrough for installing and connecting a VPN on Windows, Mac, iPhone, Android, and routers.",
    icon: "🔧",
    category: "Setup",
  },
  {
    slug: "how-to-unblock-netflix-with-vpn",
    title: "How to Unblock Netflix With a VPN",
    description: "Not all VPNs work with Netflix. Here's which ones do, and the exact steps to stream any region's library.",
    icon: "🎬",
    category: "Streaming",
  },
  {
    slug: "how-to-torrent-safely",
    title: "How to Torrent Safely With a VPN",
    description: "Protect your IP while torrenting. We explain P2P servers, kill switches, and why your VPN choice matters.",
    icon: "⬇️",
    category: "Privacy",
  },
  {
    slug: "vpn-kill-switch-explained",
    title: "What Is a VPN Kill Switch (And Do You Need One)?",
    description: "A kill switch blocks your internet if the VPN drops. Find out when it matters and how to enable it.",
    icon: "🔒",
    category: "Features",
  },
  {
    slug: "vpn-protocols-explained",
    title: "VPN Protocols Explained: WireGuard vs OpenVPN vs IKEv2",
    description: "WireGuard is fast. OpenVPN is trusted. IKEv2 reconnects well on mobile. Here's when to use each.",
    icon: "⚙️",
    category: "Technical",
  },
  {
    slug: "free-vs-paid-vpn",
    title: "Free VPN vs Paid VPN: Is the Difference Worth It?",
    description: "Free VPNs log your data and sell it. We compare the real costs of free vs paid and tell you when free is acceptable.",
    icon: "💰",
    category: "Buying Guide",
  },
];

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-3">VPN Guides</h1>
      <p className="text-slate-600 mb-10">
        Clear, jargon-free guides for getting the most out of your VPN. From first-time setup to advanced privacy configuration.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {guides.map((g) => (
          <div
            key={g.slug}
            className="border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-sm transition-all"
          >
            <div className="text-3xl mb-3">{g.icon}</div>
            <span className="inline-block bg-slate-100 text-slate-600 text-xs font-medium px-2 py-0.5 rounded-full mb-2">
              {g.category}
            </span>
            <h2 className="font-bold text-base leading-snug mb-2">{g.title}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{g.description}</p>
            <Link href={`/guides/${g.slug}`} className="mt-4 inline-block text-xs text-blue-600 font-medium hover:underline">Read guide →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
