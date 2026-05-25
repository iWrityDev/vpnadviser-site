export type Tool = {
  slug: string;
  name: string;
  tagline: string;
  rating: number;
  price: string;
  affiliateUrl: string;
  badge?: string;
  category: string;
  pros: string[];
  cons: string[];
  bestFor: string[];
  description: string;
};

export const tools: Tool[] = [
  {
    slug: "1password",
    name: "1Password",
    tagline: "The best password manager for individuals and families",
    rating: 4.8,
    price: "$2.99/mo",
    affiliateUrl: "https://1password.com",
    badge: "Best Password Manager",
    category: "Password Manager",
    pros: [
      "Watchtower breach alerts notify you when saved passwords are compromised",
      "Travel mode hides sensitive vaults at border crossings",
      "Family sharing for up to 5 users",
      "Cross-platform apps for iOS, Android, Windows, and Mac",
      "14-day free trial, no credit card required",
    ],
    cons: [
      "No permanent free tier",
      "Slight learning curve for users new to password managers",
    ],
    bestFor: ["passwords", "security", "families", "business"],
    description:
      "1Password is the most polished password manager available. Watchtower scans your saved credentials against known breach databases and alerts you immediately. Travel mode lets you hide specific vaults before crossing borders, so sensitive data is never visible during device inspections. Family plans cover five users and make shared account management simple.",
  },
  {
    slug: "mcafee",
    name: "McAfee",
    tagline: "All-in-one security suite with identity protection",
    rating: 4.3,
    price: "$39.99/yr",
    affiliateUrl: "https://mcafee.com",
    category: "Antivirus",
    pros: [
      "Real-time malware scanning blocks threats as they appear",
      "Identity theft protection monitors personal data in breach databases",
      "VPN included on most plans",
      "Covers up to 5 devices",
      "Parental controls for family plans",
    ],
    cons: [
      "Can slow older hardware during full scans",
      "Frequent upsell prompts for higher-tier plans",
    ],
    bestFor: ["antivirus", "identity-protection", "families"],
    description:
      "McAfee bundles antivirus, identity monitoring, and a VPN into one subscription, making it a solid all-in-one choice for families. Identity theft protection scans dark web databases for your email addresses, Social Security numbers, and financial accounts. The parental controls add screen time limits and content filtering across covered devices.",
  },
  {
    slug: "avast",
    name: "Avast",
    tagline: "Trusted antivirus with a built-in VPN",
    rating: 4.2,
    price: "$35.88/yr",
    affiliateUrl: "https://avast.com",
    category: "Antivirus",
    pros: [
      "Solid free tier with real-time virus scanning",
      "Built-in VPN on paid plans",
      "30+ years of threat intelligence data",
      "Wi-Fi inspector scans your network for vulnerabilities",
      "Ransomware shield protects your files",
    ],
    cons: [
      "Free version shows ads and upgrade prompts",
      "The included VPN is basic compared to dedicated VPN services",
    ],
    bestFor: ["antivirus", "free", "vpn-bundle", "beginners"],
    description:
      "Avast gives you a capable free antivirus with no time limit, which is rare. The paid plans add a built-in VPN, Wi-Fi security scanning, and the ransomware shield. If you want one app for antivirus and basic VPN coverage, Avast delivers that at a low price. The VPN is not a NordVPN replacement, but it works for encrypting public Wi-Fi connections.",
  },
  {
    slug: "eset",
    name: "ESET",
    tagline: "Lightweight antivirus built for power users",
    rating: 4.4,
    price: "$39.99/yr",
    affiliateUrl: "https://eset.com/us/",
    badge: "Best for Power Users",
    category: "Antivirus",
    pros: [
      "Extremely low system resource usage, even during scans",
      "Minimal false positives compared to competing products",
      "UEFI scanner catches firmware-level threats",
      "LiveGrid cloud threat intelligence updates in real time",
      "Ideal for gaming PCs where background processes matter",
    ],
    cons: [
      "Interface feels dated compared to McAfee or Avast",
      "Fewer consumer-facing extras than full-suite competitors",
    ],
    bestFor: ["antivirus", "lightweight", "advanced-users", "gaming"],
    description:
      "ESET runs lighter than almost any other antivirus on the market. If you game, edit video, or run resource-intensive software and notice antivirus scans dragging your machine, ESET is the fix. Its UEFI scanner goes deeper than most consumer products by checking firmware for pre-boot threats. The interface is straightforward for experienced users, though beginners may prefer something with more visual guidance.",
  },
  {
    slug: "deleteme",
    name: "DeleteMe",
    tagline: "Removes your personal data from 750+ data broker sites",
    rating: 4.7,
    price: "$10.75/mo",
    affiliateUrl: "https://joindeleteme.com",
    badge: "Best Data Removal",
    category: "Privacy",
    pros: [
      "Covers 750+ data broker and people-search sites",
      "Human-verified removals, not just automated bot requests",
      "Detailed PDF reports show exactly what was found and removed",
      "Annual re-scans keep your data off reappearing brokers",
      "Add family members under one account",
    ],
    cons: [
      "Coverage is primarily US-focused, with limited EU broker support",
      "Some broker data reappears over time and requires re-removal",
    ],
    bestFor: ["privacy", "data-removal", "identity-protection", "doxxing"],
    description:
      "DeleteMe sends human-reviewed removal requests to 750+ data brokers, people-search engines, and background-check sites. The human verification step matters: automated tools often miss broker confirmation steps, so data reappears within weeks. DeleteMe's team follows up and provides detailed PDF reports so you can see exactly which sites had your data and confirm it was removed.",
  },
  {
    slug: "incogni",
    name: "Incogni",
    tagline: "Automated data removal from data brokers, by Surfshark",
    rating: 4.5,
    price: "$6.49/mo",
    affiliateUrl: "https://incogni.com",
    category: "Privacy",
    pros: [
      "Affordable pricing, roughly half the cost of DeleteMe",
      "Fully automated process requires no manual follow-up from you",
      "Covers GDPR and CCPA legal requests for EU and US users",
      "Strong EU data broker coverage",
      "180+ brokers in scope",
    ],
    cons: [
      "Fewer brokers covered than DeleteMe's 750+",
      "Newer service with a shorter track record than established competitors",
    ],
    bestFor: ["privacy", "data-removal", "budget", "europe"],
    description:
      "Incogni, built by the team behind Surfshark, automates data removal requests using GDPR and CCPA legal frameworks. Brokers are legally required to respond to these requests, giving Incogni real leverage. At $6.49/mo it costs significantly less than DeleteMe and covers the most common brokers well. EU users especially benefit from its GDPR-first approach and European broker coverage.",
  },
  {
    slug: "fortect",
    name: "Fortect",
    tagline: "Diagnoses and fixes Windows problems automatically",
    rating: 4.3,
    price: "$29.95/yr",
    affiliateUrl: "https://fortect.com",
    category: "PC Security",
    pros: [
      "Repairs broken DLL and Windows system files without a reinstall",
      "Detects and removes malware and junk files in one scan",
      "One-click fix applies all repairs automatically",
      "60-day money-back guarantee",
      "Simple interface accessible to non-technical users",
    ],
    cons: [
      "Mainly reactive, designed to fix problems rather than prevent them",
      "Windows only, no Mac or Linux support",
    ],
    bestFor: ["pc-repair", "slow-pc", "malware-removal", "beginners"],
    description:
      "Fortect scans Windows for broken system files, corrupted DLLs, malware, and junk that slows performance, then fixes everything in one click. It is not a traditional antivirus. Think of it as a repair tool for PCs that are already struggling. If Windows crashes, runs slowly, or throws DLL errors, Fortect is often faster than a full reinstall. The 60-day money-back guarantee means you can test it risk-free.",
  },
];

export function getTool(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}
