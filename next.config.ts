import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy URLs from the pre-2026 WordPress site that still carry live
      // backlinks. Without these they 404 and that link equity is wasted.
      { source: "/fastest-vpns", destination: "/best-vpn", permanent: true },
      {
        source: "/identifying-substandard-vpns",
        destination: "/best-vpn",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
