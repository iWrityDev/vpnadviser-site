// Curated allowlists to stop generating templated pages nobody searches for.
//
// The site previously generated every possible VPN pair (13 providers = 78 compare
// pages) and all 47 country pages. On a low-authority domain that spreads crawl
// budget across near-duplicate templates and reads as scaled content. These lists
// keep only the combinations with real search demand.

// Compare slugs MUST follow the order providers appear in src/data/vpns.ts,
// because the route slug is built as `${vpns[i].slug}-vs-${vpns[j].slug}` with i < j.
// vpns.ts order: nordvpn, expressvpn, surfshark, cyberghost, protonvpn, pia,
//                ipvanish, mullvad, windscribe, tunnelbear, hotspot-shield, hideme, purevpn
export const TOP_MATCHUPS: string[] = [
  "nordvpn-vs-expressvpn",
  "nordvpn-vs-surfshark",
  "nordvpn-vs-cyberghost",
  "nordvpn-vs-protonvpn",
  "nordvpn-vs-pia",
  "nordvpn-vs-mullvad",
  "expressvpn-vs-surfshark",
  "expressvpn-vs-cyberghost",
  "expressvpn-vs-protonvpn",
  "surfshark-vs-cyberghost",
  "surfshark-vs-protonvpn",
  "surfshark-vs-pia",
  "cyberghost-vs-protonvpn",
  "cyberghost-vs-pia",
  "protonvpn-vs-mullvad",
  "protonvpn-vs-windscribe",
];

// Countries with genuine VPN search demand: large English-speaking markets plus
// the censorship/geo-restriction markets that drive the most VPN intent.
export const PRIORITY_COUNTRIES: string[] = [
  "united-states",
  "united-kingdom",
  "canada",
  "australia",
  "germany",
  "netherlands",
  "france",
  "spain",
  "italy",
  "india",
  "japan",
  "china",
  "iran",
  "turkey",
  "united-arab-emirates",
  "russia",
];
