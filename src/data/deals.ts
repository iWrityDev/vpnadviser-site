export type Deal = {
  slug: string;
  vpnName: string;
  tagline: string;
  discount: string;
  discountPct: number;
  currentPrice: string;
  normalPrice: string;
  planLength: string;
  extraMonths?: string;
  couponCode?: string;
  codeNeeded: boolean;
  affiliateUrl: string;
  moneyBack: string;
  highlight: string;
  steps: string[];
  badge?: string;
};

export const deals: Deal[] = [
  {
    slug: "nordvpn",
    vpnName: "NordVPN",
    tagline: "The best all-round VPN — with the deepest discount",
    discount: "Up to 76% off",
    discountPct: 76,
    currentPrice: "$3.39/mo",
    normalPrice: "$12.99/mo",
    planLength: "2-year plan",
    extraMonths: "+3 months free",
    couponCode: "CNEWSOFF",
    codeNeeded: true,
    affiliateUrl: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=147496&url_id=902",
    moneyBack: "30-day",
    highlight: "76% off + 3 months free on the 2-year plan. Best value deal on any top-tier VPN right now.",
    badge: "Best Deal",
    steps: [
      "Click 'Claim Deal' — takes you straight to NordVPN's checkout",
      "Select the 2-year plan (discount auto-applies)",
      "Enter code CNEWSOFF at checkout for the extra months",
      "Complete payment — 30-day money-back guarantee applies",
    ],
  },
  {
    slug: "expressvpn",
    vpnName: "ExpressVPN",
    tagline: "The fastest VPN — now at a serious discount",
    discount: "Up to 78% off",
    discountPct: 78,
    currentPrice: "$2.79/mo",
    normalPrice: "$12.95/mo",
    planLength: "2-year plan",
    extraMonths: "+4 months free",
    couponCode: "PRIVACY20",
    codeNeeded: false,
    affiliateUrl: "https://expressvpn.com",
    moneyBack: "30-day",
    highlight: "78% off the 2-year plan, 28 months total. Use code PRIVACY20 for an extra 20% off any plan.",
    steps: [
      "Click 'Claim Deal' — discount is auto-applied via our link",
      "Select the 24-month plan (gets you 28 months total)",
      "Try coupon PRIVACY20 at checkout for extra savings",
      "Pay and start a 30-day risk-free trial",
    ],
  },
  {
    slug: "surfshark",
    vpnName: "Surfshark",
    tagline: "Unlimited devices — the best value family VPN",
    discount: "Up to 86% off",
    discountPct: 86,
    currentPrice: "$1.99/mo",
    normalPrice: "$15.45/mo",
    planLength: "2-year plan",
    extraMonths: "+3 months free",
    couponCode: "SHARKGIFT",
    codeNeeded: false,
    affiliateUrl: "https://www.kqzyfj.com/click-101760415-15438560",
    moneyBack: "30-day",
    highlight: "86% off — under $2/mo for unlimited simultaneous devices. Code SHARKGIFT or SHARKSTART at checkout.",
    steps: [
      "Click 'Claim Deal' — takes you to Surfshark with discount ready",
      "Select the 24-month Starter plan",
      "Try code SHARKGIFT or SHARKSTART if the discount doesn't auto-apply",
      "30-day money-back guarantee on all plans",
    ],
  },
  {
    slug: "cyberghost",
    vpnName: "CyberGhost",
    tagline: "Longest money-back guarantee + best for streaming",
    discount: "Up to 83% off",
    discountPct: 83,
    currentPrice: "$2.03/mo",
    normalPrice: "$12.99/mo",
    planLength: "2-year plan",
    extraMonths: "+2 months free",
    codeNeeded: false,
    affiliateUrl: "https://cyberghostvpn.com",
    moneyBack: "45-day",
    highlight: "83% off the 2-year plan + the industry's longest 45-day money-back guarantee. No code needed.",
    steps: [
      "Click 'Claim Deal' — discount is pre-applied",
      "Choose the 2-year plan for the best price",
      "No coupon code needed — savings are automatic",
      "You get 45 days to test it risk-free (not 30)",
    ],
  },
  {
    slug: "protonvpn",
    vpnName: "ProtonVPN",
    tagline: "The most trusted privacy VPN — Swiss-based and open-source",
    discount: "Up to 70% off",
    discountPct: 70,
    currentPrice: "$2.99/mo",
    normalPrice: "$9.99/mo",
    planLength: "2-year plan",
    codeNeeded: false,
    affiliateUrl: "https://protonvpn.com",
    moneyBack: "30-day",
    highlight: "70% off the 2-year Plus plan. Also has a genuinely free plan with no data cap — unique in the industry.",
    steps: [
      "Click 'Claim Deal' to go to ProtonVPN",
      "Choose 'Plus' and select the 24-month billing period",
      "No code needed — discount auto-applies at checkout",
      "Or try the free plan first with no credit card required",
    ],
  },
  {
    slug: "pia",
    vpnName: "Private Internet Access",
    tagline: "Court-proven no-logs VPN at the lowest long-term price",
    discount: "Up to 83% off",
    discountPct: 83,
    currentPrice: "$2.03/mo",
    normalPrice: "$11.95/mo",
    planLength: "3-year plan",
    extraMonths: "+4 months free",
    codeNeeded: false,
    affiliateUrl: "https://privateinternetaccess.com",
    moneyBack: "30-day",
    highlight: "83% off the 3-year plan — the cheapest price per month of any reputable paid VPN. No code needed.",
    steps: [
      "Click 'Claim Deal' — PIA's best price is automatic",
      "Select the 3-year + 4 months plan",
      "No coupon code needed",
      "30-day money-back guarantee applies",
    ],
  },
];

export function getDeal(slug: string): Deal | undefined {
  return deals.find((d) => d.slug === slug);
}
