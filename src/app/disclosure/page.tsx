import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — VPN Adviser",
  description: "VPN Adviser earns affiliate commissions on some purchases. This page explains our disclosure policy and how it affects our reviews.",
};

export default function DisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Affiliate Disclosure</h1>
      <p className="text-sm text-slate-500 mb-8">Last updated: January 2026</p>

      <div className="prose prose-slate max-w-none space-y-6 text-slate-700">
        <p>
          VPN Adviser participates in affiliate marketing programs. This means that when you click certain links on this site and make a purchase, we may earn a commission from the vendor at no additional cost to you.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">What This Means for You</h2>
        <p>
          The price you pay for any VPN subscription is identical whether you use our link or go directly to the vendor's website. We receive a percentage of the sale as a referral fee, paid by the vendor, not by you.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">How Commissions Affect Our Reviews</h2>
        <p>
          They don't. Our rankings are based on testing results: speed, privacy, streaming performance, ease of use, and support quality. Commission rates vary across VPN providers, but we don't factor that into which VPN we recommend. In some cases, VPNs we rate highly pay lower commissions than VPNs we don't recommend.
        </p>
        <p>
          We do not accept payment for positive reviews, top placements, or editorial coverage. If a VPN pays for that kind of placement on another site, we'll tell you so in our review.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Which Links Are Affiliate Links?</h2>
        <p>
          Any "Get [VPN name]" button or link on this site is an affiliate link. These are clearly marked with <code>rel="nofollow"</code> in the HTML. Internal links to our own review pages are not affiliate links.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">FTC Compliance</h2>
        <p>
          We comply with the United States Federal Trade Commission guidelines on endorsements and testimonials. This disclosure page satisfies the FTC's requirement to clearly disclose material connections between publishers and advertisers.
        </p>

        <h2 className="text-xl font-bold mt-8 mb-3">Questions?</h2>
        <p>
          If you have questions about our affiliate relationships or review methodology, contact us at{" "}
          <a href="mailto:hello@vpnadviser.com" className="text-blue-600 hover:underline">
            hello@vpnadviser.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
