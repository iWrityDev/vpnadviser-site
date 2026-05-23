import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.vpnadviser.com" }],
        destination: "https://vpnadviser.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
