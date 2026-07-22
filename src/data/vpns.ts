export type VPN = {
  slug: string;
  name: string;
  tagline: string;
  logo: string;
  rating: number;
  price: string;
  affiliateUrl: string;
  badge?: string;
  pros: string[];
  cons: string[];
  specs: {
    servers: string;
    countries: string;
    devices: string;
    protocol: string;
    logs: string;
    moneyBack: string;
  };
  bestFor: string[];
  description: string;
  /** Legal jurisdiction and why it matters for privacy. */
  jurisdiction?: string;
  /** Named third-party audits with firm and year. Verifiable claims only. */
  audits?: string[];
};

export const vpns: VPN[] = [
  {
    slug: "nordvpn",
    name: "NordVPN",
    tagline: "The fastest, most reliable VPN for most people",
    logo: "/logos/nordvpn.svg",
    rating: 4.9,
    price: "$3.39/mo",
    affiliateUrl: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=147496&url_id=902",
    badge: "Best Overall",
    pros: [
      "No-logs policy independently audited five times (PwC, then Deloitte)",
      "Panama jurisdiction, outside the 14-Eyes alliance and with no mandatory data retention",
      "NordLynx, an in-house WireGuard implementation, rather than OpenVPN-only",
      "10 simultaneous connections",
      "Threat Protection blocks ads and known malware domains without extra software",
    ],
    cons: [
      "Headline price requires a multi-year commitment; the monthly rate is far higher",
      "Renewal price is significantly above the introductory rate",
      "Desktop app is heavier than minimalist competitors",
    ],
    specs: {
      servers: "7,400+",
      countries: "118+",
      devices: "10",
      protocol: "NordLynx (WireGuard)",
      logs: "No logs (independently audited)",
      moneyBack: "30-day",
    },
    jurisdiction:
      "Panama. No mandatory data retention laws and outside the 14-Eyes intelligence-sharing alliance, which is why several privacy-focused providers incorporate there.",
    audits: [
      "PricewaterhouseCoopers, no-logs assurance (2018 and 2020)",
      "Deloitte, no-logs assurance (2022, 2023, 2024, most recent published February 2026)",
    ],
    bestFor: ["streaming", "privacy", "general-use", "torrenting"],
    description:
      "NordVPN has the strongest documented audit record of any major consumer VPN: five independent no-logs assurance engagements, first by PricewaterhouseCoopers and since 2022 by Deloitte on an annual cycle. It is incorporated in Panama, which has no mandatory data retention regime. Its NordLynx protocol is built on WireGuard, and the plan covers 10 simultaneous connections. The main caveat is commercial rather than technical: the advertised price depends on a multi-year term and rises substantially at renewal.",
  },
  {
    slug: "expressvpn",
    name: "ExpressVPN",
    tagline: "The fastest VPN — worth the premium price",
    logo: "/logos/expressvpn.svg",
    rating: 4.7,
    price: "$4.99/mo",
    affiliateUrl: "https://expressvpn.com",
    badge: "Fastest",
    pros: [
      "Top-tier speeds on Lightway protocol",
      "Works reliably in China and restricted regions",
      "Router app support",
      "Best-in-class customer support",
      "Trusted for 10+ years",
    ],
    cons: [
      "Most expensive mainstream option",
      "Only 8 simultaneous connections",
    ],
    specs: {
      servers: "3,000+",
      countries: "105",
      devices: "8",
      protocol: "Lightway",
      logs: "No logs (TrustedServer)",
      moneyBack: "30-day",
    },
    bestFor: ["speed", "china", "router", "business"],
    description:
      "ExpressVPN charges a premium but delivers on speed and reliability. Its Lightway protocol is among the fastest available, and it's one of the few VPNs that still works consistently in China. TrustedServer technology runs entirely from RAM, wiping all data on reboot.",
  },
  {
    slug: "surfshark",
    name: "Surfshark",
    tagline: "Best value VPN — unlimited devices",
    logo: "/logos/surfshark.svg",
    rating: 4.6,
    price: "$2.19/mo",
    affiliateUrl: "https://www.kqzyfj.com/click-101760415-15438560",
    badge: "Best Value",
    pros: [
      "Unlimited simultaneous connections, the clearest differentiator in the category",
      "No-logs policy audited by Deloitte in 2023 and again in June 2025 under ISAE 3000",
      "Infrastructure and the Dausos protocol audited by Cure53 in 2025",
      "CleanWeb blocks ads and malware domains without a separate extension",
      "Among the cheapest long-term plans of any audited provider",
    ],
    cons: [
      "Incorporated in the Netherlands, a 9-Eyes member, unlike Panama-based or BVI-based rivals",
      "Dutch law means a valid legal order can compel disclosure of whatever it holds",
      "Headline price requires a multi-year term and rises sharply at renewal",
    ],
    specs: {
      servers: "3,200+",
      countries: "100",
      devices: "Unlimited",
      protocol: "WireGuard / IKEv2",
      logs: "No logs (independently audited)",
      moneyBack: "30-day",
    },
    jurisdiction:
      "Netherlands. Worth understanding before you buy: the Netherlands is a member of the 9-Eyes intelligence-sharing alliance, and Dutch law allows a valid legal order to compel disclosure of data the company holds. The audited no-logs policy is what limits how much that data amounts to.",
    audits: [
      "Deloitte, no-logs assurance under ISAE 3000 (2023 and June 2025)",
      "Cure53, infrastructure and Dausos protocol review (2025)",
      "Cure53, browser extension review (2018)",
    ],
    bestFor: ["budget", "families", "streaming", "beginners"],
    description:
      "Surfshark is the value pick, and unlimited simultaneous connections is a genuine differentiator rather than a marketing line: no other major provider allows it without a device cap. Its no-logs policy has been verified twice by Deloitte under ISAE 3000, most recently in June 2025, and Cure53 reviewed its infrastructure in 2025. The trade-off is jurisdictional. Surfshark is incorporated in the Netherlands, a 9-Eyes member, whereas NordVPN sits in Panama. If your threat model is a commercial one (public Wi-Fi, tracking, geo-restrictions) that distinction is largely academic. If it is a legal one, it is the single most important line on this page.",
  },
  {
    slug: "cyberghost",
    name: "CyberGhost",
    tagline: "45-day money-back and optimized streaming servers",
    logo: "/logos/cyberghost.svg",
    rating: 4.4,
    price: "$2.03/mo",
    affiliateUrl: "https://cyberghostvpn.com",
    pros: [
      "Largest server network (11,500+)",
      "Dedicated streaming servers per platform",
      "45-day money-back guarantee",
      "7 simultaneous devices",
      "Very beginner-friendly apps",
    ],
    cons: [
      "Doesn't work reliably in China",
      "Slower on some European servers",
    ],
    specs: {
      servers: "11,500+",
      countries: "100",
      devices: "7",
      protocol: "WireGuard / OpenVPN",
      logs: "No logs (Romania jurisdiction)",
      moneyBack: "45-day",
    },
    bestFor: ["streaming", "beginners", "torrenting", "long-trial"],
    description:
      "CyberGhost has the largest server network of any major VPN and dedicates specific servers to Netflix, BBC iPlayer, and other platforms. The 45-day money-back guarantee is the longest in the industry, and its apps are among the most beginner-friendly.",
  },
  {
    slug: "protonvpn",
    name: "ProtonVPN",
    tagline: "The best VPN for privacy — with a genuine free tier",
    logo: "/logos/protonvpn.svg",
    rating: 4.5,
    price: "Free / $3.99/mo",
    affiliateUrl: "https://protonvpn.com",
    badge: "Best Free",
    pros: [
      "No-data-cap free plan (unique in the industry)",
      "Swiss jurisdiction with strict privacy laws",
      "Open-source and independently audited",
      "Secure Core routing for high-risk users",
      "Integrated with Proton Mail",
    ],
    cons: [
      "Free plan limited to 3 countries",
      "Slower speeds on free servers",
    ],
    specs: {
      servers: "6,500+",
      countries: "112",
      devices: "10",
      protocol: "WireGuard / OpenVPN",
      logs: "No logs (audited, open-source)",
      moneyBack: "30-day",
    },
    bestFor: ["privacy", "free", "journalists", "activists"],
    description:
      "ProtonVPN is the only top-tier VPN with a genuinely free plan and no data cap. Swiss jurisdiction, open-source apps, and independent audits make it the best choice for users who need serious privacy. Secure Core routes traffic through multiple countries before exiting.",
  },
  {
    slug: "pia",
    name: "Private Internet Access",
    tagline: "Proven no-logs VPN with the largest server network",
    logo: "/logos/pia.svg",
    rating: 4.3,
    price: "$2.03/mo",
    affiliateUrl: "https://privateinternetaccess.com",
    pros: [
      "Proven no-logs in court (twice)",
      "Highly configurable for advanced users",
      "Supports port forwarding for torrenting",
      "10 simultaneous connections",
      "Open-source apps",
    ],
    cons: [
      "US jurisdiction (Five Eyes)",
      "Streaming performance inconsistent",
    ],
    specs: {
      servers: "35,000+",
      countries: "91",
      devices: "10",
      protocol: "WireGuard / OpenVPN",
      logs: "No logs (court-proven)",
      moneyBack: "30-day",
    },
    bestFor: ["torrenting", "privacy", "advanced-users", "port-forwarding"],
    description:
      "Private Internet Access has had its no-logs policy proven in court twice when the US government subpoenaed server data and found nothing. Its massive server network and port forwarding support make it the best choice for serious torrenting.",
  },
  {
    slug: "ipvanish",
    name: "IPVanish",
    tagline: "Unlimited connections — great for Firestick and Kodi",
    logo: "/logos/ipvanish.svg",
    rating: 4.2,
    price: "$2.62/mo",
    affiliateUrl: "https://ipvanish.com",
    pros: [
      "Unlimited simultaneous connections",
      "Owns all its own servers (no third-party renting)",
      "Great Firestick and Android TV app",
      "SOCKS5 proxy included",
      "No connection limit on any plan",
    ],
    cons: [
      "Based in the US (Five Eyes)",
      "Weaker at unblocking Netflix",
    ],
    specs: {
      servers: "2,400+",
      countries: "90",
      devices: "Unlimited",
      protocol: "WireGuard / IKEv2",
      logs: "No logs",
      moneyBack: "30-day",
    },
    bestFor: ["firestick", "kodi", "streaming-devices", "families"],
    description:
      "IPVanish owns all its server infrastructure rather than renting from third parties, giving it more control over security. Its Firestick app is one of the best available, and unlimited simultaneous connections make it a solid family VPN at a reasonable price.",
  },
  {
    slug: "mullvad",
    name: "Mullvad",
    tagline: "No email, no account — maximum anonymity",
    logo: "/logos/mullvad.svg",
    rating: 4.4,
    price: "€5/mo",
    affiliateUrl: "https://mullvad.net",
    badge: "Most Anonymous",
    pros: [
      "No email or personal info required to sign up",
      "Accepts cash and Monero payments",
      "Flat pricing — no long-term discount tricks",
      "Open-source, independently audited",
      "RAM-only servers",
    ],
    cons: [
      "Not focused on streaming or Netflix",
      "Doesn't work in China",
      "Smaller server network than rivals",
    ],
    specs: {
      servers: "800+",
      countries: "49",
      devices: "5",
      protocol: "WireGuard / OpenVPN",
      logs: "No logs (audited)",
      moneyBack: "None (cancel anytime)",
    },
    bestFor: ["anonymity", "privacy", "activists", "journalists"],
    description:
      "Mullvad requires no email address and no account name to sign up. You get a random account number. You can pay with cash, Bitcoin, or Monero. This is the most anonymous VPN available, built for users who take privacy seriously rather than those who want to stream Netflix.",
  },
  {
    slug: "windscribe",
    name: "Windscribe",
    tagline: "Generous free plan and built-in ad blocker",
    logo: "/logos/windscribe.svg",
    rating: 4.1,
    price: "Free / $4.08/mo",
    affiliateUrl: "https://windscribe.com",
    pros: [
      "10 GB/month free plan (best free limit)",
      "R.O.B.E.R.T. DNS blocker built in",
      "Supports browser extensions",
      "Build-your-own plan option",
      "No connection limit",
    ],
    cons: [
      "Free plan limited to 10 countries",
      "Slower speeds than top-tier paid VPNs",
    ],
    specs: {
      servers: "500+",
      countries: "69",
      devices: "Unlimited",
      protocol: "WireGuard / IKEv2",
      logs: "Minimal (connection timestamps only)",
      moneyBack: "3-day",
    },
    bestFor: ["free", "casual-users", "ad-blocking", "budget"],
    description:
      "Windscribe's free plan gives 10 GB per month and access to servers in 10 countries. The R.O.B.E.R.T. DNS blocking system lets you block ads, trackers, malware, and social media networks at the DNS level. The build-your-own plan lets you pay per country.",
  },
  {
    slug: "tunnelbear",
    name: "TunnelBear",
    tagline: "The most beginner-friendly VPN on the market",
    logo: "/logos/tunnelbear.svg",
    rating: 4.0,
    price: "Free / $3.33/mo",
    affiliateUrl: "https://tunnelbear.com",
    pros: [
      "Simplest app interface available",
      "Independently audited every year",
      "Free plan with no payment info required",
      "Unlimited devices on paid plans",
      "No-logs policy",
    ],
    cons: [
      "Only 2 GB/month on free plan",
      "Not suitable for power users",
      "Doesn't work in China",
    ],
    specs: {
      servers: "5,000+",
      countries: "47",
      devices: "Unlimited",
      protocol: "WireGuard / IKEv2",
      logs: "No logs (audited)",
      moneyBack: "None (cancel anytime)",
    },
    bestFor: ["beginners", "casual-users", "free", "simple"],
    description:
      "TunnelBear is the VPN you recommend to someone who has never used one before. The app is visually simple, connecting is one tap, and its annual independent audits give it credibility. The free plan is limited to 2 GB per month, enough for light browsing but not streaming.",
  },
  {
    slug: "hotspot-shield",
    name: "Hotspot Shield",
    tagline: "Blazing-fast speeds with a generous free plan",
    logo: "/logos/hotspot-shield.svg",
    rating: 4.0,
    price: "Free / $2.99/mo",
    affiliateUrl: "https://hotspotshield.com",
    pros: [
      "Proprietary Hydra protocol delivers top-tier speeds",
      "Free plan with 500 MB/day (no credit card needed)",
      "Unblocks Netflix US reliably",
      "Very easy one-tap app design",
      "5 simultaneous connections on paid plan",
    ],
    cons: [
      "Free plan limited to US servers only",
      "No-logs policy not independently audited",
      "Logs some connection metadata (timestamps, bandwidth)",
    ],
    specs: {
      servers: "1,800+",
      countries: "80+",
      devices: "5",
      protocol: "Hydra (proprietary)",
      logs: "Minimal connection logs",
      moneyBack: "45-day",
    },
    bestFor: ["speed", "streaming", "beginners", "free"],
    description:
      "Hotspot Shield built its own Hydra protocol, which consistently delivers some of the fastest raw speeds of any consumer VPN. The free plan gives 500 MB per day with no credit card required. The paid plan unblocks Netflix US reliably, though privacy-focused users should note that Hotspot Shield logs some connection metadata and its no-logs policy has not been independently audited.",
  },
  {
    slug: "hideme",
    name: "hide.me",
    tagline: "Strong privacy, audited no-logs, and a capable free tier",
    logo: "/logos/hideme.svg",
    rating: 4.2,
    price: "Free / $4.99/mo",
    affiliateUrl: "https://hide.me",
    badge: "Privacy Pick",
    pros: [
      "10 GB/month free plan (5 server locations)",
      "Independently audited no-logs policy",
      "Supports all major protocols including WireGuard",
      "No registration required for free plan",
      "Port forwarding on paid plans",
    ],
    cons: [
      "Smaller server network than rivals",
      "Streaming performance inconsistent on some servers",
      "Premium price higher than Surfshark or PIA",
    ],
    specs: {
      servers: "2,000+",
      countries: "75",
      devices: "10",
      protocol: "WireGuard / OpenVPN / IKEv2",
      logs: "No logs (audited)",
      moneyBack: "30-day",
    },
    bestFor: ["privacy", "free", "port-forwarding", "beginners"],
    description:
      "hide.me offers one of the strongest free plans available — 10 GB per month across five server locations, with no email registration required. Its no-logs policy has passed independent audits and Malaysian jurisdiction keeps it outside Five Eyes. Port forwarding on paid plans makes it a solid option for torrenting. Speed and streaming reliability lag behind NordVPN and ExpressVPN, but privacy-focused users get genuine value here.",
  },
  {
    slug: "purevpn",
    name: "PureVPN",
    tagline: "6,500+ servers and reliable port forwarding for power users",
    logo: "/logos/purevpn.svg",
    rating: 4.0,
    price: "$2.08/mo",
    affiliateUrl: "https://purevpn.com",
    pros: [
      "One of the largest server networks at 6,500+ servers",
      "Port forwarding add-on available",
      "10 simultaneous connections",
      "Good split tunneling implementation",
      "Always-on audit program since 2023",
    ],
    cons: [
      "Past logging controversy (2017 FBI case — policy since overhauled)",
      "Streaming performance inconsistent",
      "Support quality varies",
    ],
    specs: {
      servers: "6,500+",
      countries: "78",
      devices: "10",
      protocol: "WireGuard / OpenVPN / IKEv2",
      logs: "No logs (always-on audit)",
      moneyBack: "31-day",
    },
    bestFor: ["torrenting", "port-forwarding", "budget", "advanced-users"],
    description:
      "PureVPN has the second-largest server network of any consumer VPN (behind PIA) and added a port forwarding add-on that makes it competitive for torrenting. After a 2017 incident where PureVPN shared connection logs with the FBI, the company overhauled its no-logs policy and launched an always-on audit program in 2023. Speed and streaming performance are solid but trail the top tier. At $2.08/mo, it undercuts most of the competition.",
  },
];

export function getVPN(slug: string): VPN | undefined {
  return vpns.find((v) => v.slug === slug);
}
