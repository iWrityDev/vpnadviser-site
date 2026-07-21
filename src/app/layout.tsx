import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
// grid-cols-5 — keep this comment so Tailwind includes the class


const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vpnadviser.com"),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "VPN Adviser — Independent VPN Reviews & Comparisons 2026",
    template: "%s | VPN Adviser",
  },
  description:
    "Unbiased VPN comparisons, side-by-side breakdowns, and guides to help you choose the right VPN in 2026. Based on published specifications, independent audits, and public benchmark data.",
  keywords: ["best VPN", "VPN review", "VPN comparison", "VPN for Netflix", "VPN 2026"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "VPN Adviser",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "VPN Adviser" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-default.png"] },
  robots: { index: true, follow: true },
  verification: { google: "cpuIiJsWETGLqPF_wfZJIjfRYl5H0mtOFCN4CfE0riI" },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "VPN Adviser",
  url: "https://www.vpnadviser.com",
  description: "Independent VPN reviews, comparisons, and guides",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.vpnadviser.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <Script
          defer
          data-domain="vpnadviser.com"
          src="https://analytics.skriuwer.com/js/script.js"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <span className="text-2xl">🛡️</span>
          <span>VPN Adviser</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium">
          <Link href="/best-vpn" className="hover:text-blue-600 transition-colors hidden sm:inline">Best VPN</Link>
          <Link href="/reviews" className="hover:text-blue-600 transition-colors">Reviews</Link>
          <Link href="/compare" className="hover:text-blue-600 transition-colors">Compare</Link>
          <Link href="/best-vpn-for" className="hover:text-blue-600 transition-colors hidden sm:inline">Best VPN For</Link>
          <Link href="/vpn-for" className="hover:text-blue-600 transition-colors hidden md:inline">By Country</Link>
          <Link href="/guides" className="hover:text-blue-600 transition-colors hidden lg:inline">Guides</Link>
          <Link href="/tools" className="hover:text-blue-600 transition-colors hidden lg:inline">Tools</Link>
          <Link href="/deals" className="hover:text-blue-600 transition-colors hidden lg:inline">Deals</Link>
          <Link href="/blog" className="hover:text-blue-600 transition-colors hidden xl:inline">Blog</Link>
          <Link
            href="/reviews/nordvpn"
            className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors hidden sm:inline"
          >
            Top Pick →
          </Link>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600">
        <div className="grid gap-8 md:grid-cols-5">
          <div>
            <div className="font-bold text-slate-900 mb-3">🛡️ VPN Adviser</div>
            <p className="leading-relaxed">
              Independent VPN comparisons and guides. We analyse published
              specifications, independent security audits, and public benchmark
              data. No sponsored rankings.
            </p>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-3">Reviews</div>
            <ul className="space-y-2">
              <li><Link href="/reviews/nordvpn" className="hover:text-blue-600">NordVPN Review</Link></li>
              <li><Link href="/reviews/expressvpn" className="hover:text-blue-600">ExpressVPN Review</Link></li>
              <li><Link href="/reviews/surfshark" className="hover:text-blue-600">Surfshark Review</Link></li>
              <li><Link href="/reviews/cyberghost" className="hover:text-blue-600">CyberGhost Review</Link></li>
              <li><Link href="/reviews/protonvpn" className="hover:text-blue-600">Proton VPN Review</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-3">Best VPN For</div>
            <ul className="space-y-2">
              <li><Link href="/best-vpn-for/netflix" className="hover:text-blue-600">Netflix</Link></li>
              <li><Link href="/best-vpn-for/torrenting" className="hover:text-blue-600">Torrenting</Link></li>
              <li><Link href="/best-vpn-for/gaming" className="hover:text-blue-600">Gaming</Link></li>
              <li><Link href="/best-vpn-for/china" className="hover:text-blue-600">China</Link></li>
              <li><Link href="/best-vpn-for/free" className="hover:text-blue-600">Free VPN</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-3">VPN By Country</div>
            <ul className="space-y-2">
              <li><Link href="/vpn-for/united-states" className="hover:text-blue-600">USA</Link></li>
              <li><Link href="/vpn-for/united-kingdom" className="hover:text-blue-600">UK</Link></li>
              <li><Link href="/vpn-for/germany" className="hover:text-blue-600">Germany</Link></li>
              <li><Link href="/vpn-for/china" className="hover:text-blue-600">China</Link></li>
              <li><Link href="/vpn-for" className="hover:text-blue-600">All Countries →</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-3">Company</div>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
              <li><Link href="/guides" className="hover:text-blue-600">Guides</Link></li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li><Link href="/deals" className="hover:text-blue-600">VPN Deals</Link></li>
              <li><Link href="/disclosure" className="hover:text-blue-600">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between gap-3 text-slate-500">
          <div>© {new Date().getFullYear()} VPN Adviser. All rights reserved.</div>
          <div>
            This site contains affiliate links.{" "}
            <Link href="/disclosure" className="underline hover:text-blue-600">Read our disclosure.</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
