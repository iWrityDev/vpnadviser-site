export type UseCase = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  topPick: string;
};

export const useCases: UseCase[] = [
  // Streaming
  { slug: "netflix", title: "Best VPN for Netflix", description: "Unblock Netflix libraries from the US, UK, Japan and more", icon: "📺", topPick: "nordvpn" },
  { slug: "streaming", title: "Best VPN for Streaming", description: "Reliable access to Disney+, BBC iPlayer, Hulu and more", icon: "▶️", topPick: "nordvpn" },
  { slug: "hulu", title: "Best VPN for Hulu", description: "Access Hulu from anywhere — works reliably without buffering", icon: "🎬", topPick: "nordvpn" },
  { slug: "disney-plus", title: "Best VPN for Disney+", description: "Unlock every Disney+ regional library from any country", icon: "🏰", topPick: "nordvpn" },
  { slug: "bbc-iplayer", title: "Best VPN for BBC iPlayer", description: "Stream BBC iPlayer outside the UK without being blocked", icon: "🎭", topPick: "expressvpn" },
  { slug: "amazon-prime", title: "Best VPN for Amazon Prime", description: "Access Prime Video libraries from any country", icon: "🎥", topPick: "nordvpn" },
  { slug: "hbo-max", title: "Best VPN for Max (HBO)", description: "Unblock Max and watch HBO exclusives from outside the US", icon: "🦸", topPick: "nordvpn" },

  // Privacy and security
  { slug: "privacy", title: "Best VPN for Privacy", description: "Audited no-logs policies and maximum anonymity", icon: "🔒", topPick: "protonvpn" },
  { slug: "anonymity", title: "Best VPN for Anonymity", description: "Zero-knowledge VPNs that don't even know who you are", icon: "👤", topPick: "mullvad" },
  { slug: "public-wifi", title: "Best VPN for Public Wi-Fi", description: "Stay safe on café, airport, and hotel networks", icon: "☕", topPick: "nordvpn" },
  { slug: "work-from-home", title: "Best VPN for Working From Home", description: "Secure remote access to company resources from anywhere", icon: "🏠", topPick: "nordvpn" },
  { slug: "business", title: "Best VPN for Business", description: "Team VPN solutions with centralised management", icon: "💼", topPick: "nordvpn" },
  { slug: "journalists", title: "Best VPN for Journalists", description: "Source protection and censorship bypass for investigative reporters", icon: "📰", topPick: "protonvpn" },

  // Torrenting
  { slug: "torrenting", title: "Best VPN for Torrenting", description: "P2P-optimised servers with no bandwidth throttling", icon: "⬇️", topPick: "pia" },
  { slug: "p2p", title: "Best VPN for P2P", description: "Port forwarding and P2P servers for fast peer-to-peer downloads", icon: "🔄", topPick: "pia" },

  // Gaming
  { slug: "gaming", title: "Best VPN for Gaming", description: "Low-latency servers to reduce ping and bypass geo-blocks", icon: "🎮", topPick: "expressvpn" },
  { slug: "ps5", title: "Best VPN for PS5", description: "Set up a VPN on your PlayStation 5 via router or hotspot", icon: "🕹️", topPick: "expressvpn" },
  { slug: "xbox", title: "Best VPN for Xbox", description: "Unlock early game releases and reduce lag on Xbox", icon: "🎯", topPick: "nordvpn" },

  // Devices
  { slug: "iphone", title: "Best VPN for iPhone", description: "Lightweight, battery-friendly VPNs built for iOS", icon: "📱", topPick: "expressvpn" },
  { slug: "android", title: "Best VPN for Android", description: "Top-rated Android VPN apps with kill switch", icon: "🤖", topPick: "nordvpn" },
  { slug: "mac", title: "Best VPN for Mac", description: "Native macOS apps with fast speeds and easy setup", icon: "💻", topPick: "nordvpn" },
  { slug: "windows", title: "Best VPN for Windows", description: "Full-featured Windows VPN clients with split tunnelling", icon: "🖥️", topPick: "nordvpn" },
  { slug: "linux", title: "Best VPN for Linux", description: "Command-line and GUI VPN clients for Ubuntu, Debian and more", icon: "🐧", topPick: "protonvpn" },
  { slug: "firestick", title: "Best VPN for Firestick", description: "Install a VPN directly on your Amazon Fire TV Stick", icon: "🔥", topPick: "ipvanish" },
  { slug: "smart-tv", title: "Best VPN for Smart TV", description: "Get a VPN on Samsung, LG, and Android TV", icon: "📡", topPick: "expressvpn" },
  { slug: "router", title: "Best VPN for Router", description: "Router-level protection for every device in your home", icon: "🌐", topPick: "expressvpn" },
  { slug: "chromebook", title: "Best VPN for Chromebook", description: "Android-compatible VPN apps that run on ChromeOS", icon: "🔵", topPick: "nordvpn" },

  // Specific use cases
  { slug: "china", title: "Best VPN for China", description: "VPNs proven to bypass the Great Firewall reliably", icon: "🏮", topPick: "expressvpn" },
  { slug: "travel", title: "Best VPN for Travel", description: "Access home content and stay secure on public Wi-Fi abroad", icon: "✈️", topPick: "expressvpn" },
  { slug: "free", title: "Best Free VPN", description: "No-cost VPNs with no data cap or hidden catches", icon: "🆓", topPick: "protonvpn" },
  { slug: "school", title: "Best VPN for School", description: "Bypass school and university network restrictions", icon: "🎓", topPick: "nordvpn" },
  { slug: "hotel-wifi", title: "Best VPN for Hotel Wi-Fi", description: "Secure your connection on hotel and Airbnb networks", icon: "🏨", topPick: "nordvpn" },
  { slug: "crypto", title: "Best VPN for Crypto", description: "Anonymous browsing when trading or holding cryptocurrency", icon: "₿", topPick: "mullvad" },
  { slug: "beginners", title: "Best VPN for Beginners", description: "Simple, one-tap VPNs that anyone can set up in minutes", icon: "🌱", topPick: "tunnelbear" },
  { slug: "cheap", title: "Best Cheap VPN", description: "Under $3/month VPNs that don't cut corners on privacy", icon: "💰", topPick: "surfshark" },
  { slug: "russia", title: "Best VPN for Russia", description: "Access blocked websites and bypass Russian internet restrictions", icon: "🇷🇺", topPick: "expressvpn" },
  { slug: "iran", title: "Best VPN for Iran", description: "Bypass internet censorship and access the open web from Iran", icon: "🌐", topPick: "expressvpn" },
];
