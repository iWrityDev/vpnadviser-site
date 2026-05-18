export type UseCase = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  topPick: string; // VPN slug
};

export const useCases: UseCase[] = [
  { slug: "netflix", title: "Best VPN for Netflix", description: "Unblock Netflix libraries from the US, UK, Japan and more", icon: "📺", topPick: "nordvpn" },
  { slug: "torrenting", title: "Best VPN for Torrenting", description: "P2P-optimised servers with no bandwidth throttling", icon: "⬇️", topPick: "nordvpn" },
  { slug: "gaming", title: "Best VPN for Gaming", description: "Low-latency servers to reduce ping and bypass geo-blocks", icon: "🎮", topPick: "expressvpn" },
  { slug: "streaming", title: "Best VPN for Streaming", description: "Reliable access to Disney+, BBC iPlayer, Hulu and more", icon: "▶️", topPick: "nordvpn" },
  { slug: "iphone", title: "Best VPN for iPhone", description: "Lightweight, battery-friendly VPNs built for iOS", icon: "📱", topPick: "expressvpn" },
  { slug: "android", title: "Best VPN for Android", description: "Top-rated Android VPN apps with kill switch", icon: "🤖", topPick: "nordvpn" },
  { slug: "china", title: "Best VPN for China", description: "VPNs proven to bypass the Great Firewall reliably", icon: "🏮", topPick: "expressvpn" },
  { slug: "free", title: "Best Free VPN", description: "No-cost VPNs with no data cap or hidden catches", icon: "🆓", topPick: "protonvpn" },
  { slug: "privacy", title: "Best VPN for Privacy", description: "Audited no-logs policies and maximum anonymity", icon: "🔒", topPick: "protonvpn" },
  { slug: "travel", title: "Best VPN for Travel", description: "Access home content and stay secure on public Wi-Fi", icon: "✈️", topPick: "expressvpn" },
  { slug: "mac", title: "Best VPN for Mac", description: "Native macOS apps with fast speeds and easy setup", icon: "💻", topPick: "nordvpn" },
  { slug: "router", title: "Best VPN for Router", description: "Router-level protection for every device in your home", icon: "📡", topPick: "expressvpn" },
];
