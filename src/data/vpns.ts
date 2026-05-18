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
    tagline: "Best overall VPN — fast, secure, and packed with features",
    logo: "/logos/nordvpn.svg",
    rating: 4.9,
    price: "From $3.39/mo",
    affiliateUrl: "https://nordvpn.com", // replace with affiliate link
    badge: "Best Overall",
    pros: [
      "6,000+ servers in 111 countries",
      "Threat Protection blocks ads and malware",
      "Audited no-logs policy",
      "Up to 10 devices simultaneously",
    ],
    cons: [
      "Slightly pricier than some competitors",
      "Desktop app can feel heavy",
    ],
    specs: {
      servers: "6,400+",
      countries: "111",
      devices: "10",
      protocol: "NordLynx (WireGuard)",
      logs: "No logs (audited)",
      moneyBack: "30 days",
    },
    bestFor: ["streaming", "privacy", "torrenting", "general-use"],
    description:
      "NordVPN is the most well-rounded VPN on the market. With 6,400+ servers, a proven no-logs policy, and built-in threat protection, it covers every use case from Netflix unblocking to secure torrenting. The NordLynx protocol delivers some of the fastest speeds we have tested.",
  },
  {
    slug: "expressvpn",
    name: "ExpressVPN",
    tagline: "Fastest VPN — top pick for streaming and travel",
    logo: "/logos/expressvpn.svg",
    rating: 4.7,
    price: "From $4.99/mo",
    affiliateUrl: "https://expressvpn.com", // replace with affiliate link
    badge: "Fastest",
    pros: [
      "Consistently fastest speeds in our tests",
      "Works in China and restricted countries",
      "8 simultaneous devices",
      "Lightway protocol (proprietary, very fast)",
    ],
    cons: ["More expensive than rivals", "Fewer servers than NordVPN"],
    specs: {
      servers: "3,000+",
      countries: "105",
      devices: "8",
      protocol: "Lightway",
      logs: "No logs (audited)",
      moneyBack: "30 days",
    },
    bestFor: ["streaming", "travel", "china", "speed"],
    description:
      "ExpressVPN consistently tops speed tests and is one of the few VPNs that reliably works in China. Its Lightway protocol is fast, lightweight, and open-source audited. If raw speed and streaming reliability are your priority, ExpressVPN is the pick.",
  },
  {
    slug: "surfshark",
    name: "Surfshark",
    tagline: "Best value VPN — unlimited devices, low price",
    logo: "/logos/surfshark.svg",
    rating: 4.6,
    price: "From $2.19/mo",
    affiliateUrl: "https://surfshark.com", // replace with affiliate link
    badge: "Best Value",
    pros: [
      "Unlimited simultaneous devices",
      "One of the cheapest plans available",
      "CleanWeb ad and malware blocker",
      "Solid streaming performance",
    ],
    cons: ["Slightly slower than NordVPN", "Smaller server network"],
    specs: {
      servers: "3,200+",
      countries: "100",
      devices: "Unlimited",
      protocol: "WireGuard",
      logs: "No logs (audited)",
      moneyBack: "30 days",
    },
    bestFor: ["budget", "families", "streaming", "general-use"],
    description:
      "Surfshark is the best budget VPN without meaningful compromises. Unlimited simultaneous connections make it ideal for families or people with many devices. The price-to-performance ratio is unmatched at the low end of the market.",
  },
  {
    slug: "cyberghost",
    name: "CyberGhost",
    tagline: "Easiest to use VPN — beginner-friendly with dedicated streaming servers",
    logo: "/logos/cyberghost.svg",
    rating: 4.4,
    price: "From $2.03/mo",
    affiliateUrl: "https://cyberghost.com", // replace with affiliate link
    pros: [
      "Dedicated servers for Netflix, Disney+, BBC iPlayer",
      "Very beginner-friendly apps",
      "9,000+ servers worldwide",
      "45-day money-back guarantee",
    ],
    cons: ["Slower on long-distance servers", "Does not work reliably in China"],
    specs: {
      servers: "9,000+",
      countries: "91",
      devices: "7",
      protocol: "WireGuard",
      logs: "No logs",
      moneyBack: "45 days",
    },
    bestFor: ["streaming", "beginners", "budget"],
    description:
      "CyberGhost is the easiest VPN to get started with, thanks to clearly labeled streaming servers and a simple interface. Its 45-day money-back guarantee is the longest in the industry. A strong choice for anyone new to VPNs.",
  },
  {
    slug: "protonvpn",
    name: "Proton VPN",
    tagline: "Best free tier — privacy-first VPN from the Proton Mail team",
    logo: "/logos/protonvpn.svg",
    rating: 4.5,
    price: "Free or from $3.99/mo",
    affiliateUrl: "https://protonvpn.com", // replace with affiliate link
    badge: "Best Free",
    pros: [
      "Genuinely free plan with no data cap",
      "Open-source and independently audited",
      "Based in Switzerland (strong privacy laws)",
      "Tor over VPN support",
    ],
    cons: ["Free plan is slow and limited to 3 servers", "Paid plan pricier than budget rivals"],
    specs: {
      servers: "4,000+",
      countries: "91",
      devices: "10",
      protocol: "WireGuard",
      logs: "No logs (audited)",
      moneyBack: "30 days",
    },
    bestFor: ["privacy", "free", "journalists", "activists"],
    description:
      "Proton VPN is built by the team behind Proton Mail, with privacy as the founding principle rather than an afterthought. The free plan has no data cap — a rarity. For activists, journalists, or anyone who needs maximum privacy assurance, Proton VPN is the safest choice.",
  },
];

export function getVPN(slug: string): VPN | undefined {
  return vpns.find((v) => v.slug === slug);
}
