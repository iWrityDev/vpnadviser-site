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
};

export const vpns: VPN[] = [
  {
    slug: "nordvpn",
    name: "NordVPN",
    tagline: "The fastest, most reliable VPN for most people",
    logo: "/logos/nordvpn.svg",
    rating: 4.9,
    price: "$3.39/mo",
    affiliateUrl: "https://nordvpn.com",
    badge: "Best Overall",
    pros: [
      "Consistently fast speeds (WireGuard/NordLynx)",
      "Reliable Netflix and streaming unblocking",
      "Audited no-logs policy",
      "10 simultaneous devices",
      "Threat protection built in",
    ],
    cons: [
      "Slightly more expensive than budget picks",
      "Desktop app can feel heavy",
    ],
    specs: {
      servers: "6,400+",
      countries: "111",
      devices: "10",
      protocol: "NordLynx (WireGuard)",
      logs: "No logs (audited)",
      moneyBack: "30-day",
    },
    bestFor: ["streaming", "privacy", "general-use", "torrenting"],
    description:
      "NordVPN is the top pick for most users. It consistently unblocks Netflix and major streaming platforms, posts fast speeds on NordLynx, and has an audited no-logs policy. The threat protection feature blocks ads and malware without extra software.",
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
    affiliateUrl: "https://surfshark.com",
    badge: "Best Value",
    pros: [
      "Unlimited simultaneous devices",
      "CleanWeb ad and malware blocker",
      "Nexus IP rotation for extra privacy",
      "Good streaming performance",
      "Cheap long-term pricing",
    ],
    cons: [
      "Slower than NordVPN on some servers",
      "Monthly price is high without a long-term plan",
    ],
    specs: {
      servers: "3,200+",
      countries: "100",
      devices: "Unlimited",
      protocol: "WireGuard / IKEv2",
      logs: "No logs (audited)",
      moneyBack: "30-day",
    },
    bestFor: ["budget", "families", "streaming", "beginners"],
    description:
      "Surfshark is the best value VPN for households. Unlimited device connections make it ideal for families, and the CleanWeb feature handles ads without a separate blocker. Speeds are solid, though NordVPN edges it out in raw performance.",
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
];

export function getVPN(slug: string): VPN | undefined {
  return vpns.find((v) => v.slug === slug);
}
