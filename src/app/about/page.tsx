import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About VPN Adviser — How We Compare & Rate VPNs",
  description: "VPN Adviser is an independent comparison site. We analyse published specifications, third-party audits, and public benchmark data, and earn a commission if you buy through our links, at no extra cost to you.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">About VPN Adviser</h1>

      <p className="text-lg text-slate-600 mb-10">
        VPN Adviser is an independent website that compares VPN services. We don't take money for rankings and we don't publish paid reviews. Our ratings are based on documented evidence rather than on paid placement.
      </p>

      {/* Methodology */}
      <h2 className="text-xl font-bold mt-8 mb-4">How We Evaluate VPNs</h2>
      <div className="border border-amber-300 bg-amber-50 rounded-2xl p-5 mb-6">
        <div className="font-semibold text-amber-900 mb-2">What this site is, and is not</div>
        <p className="text-sm text-amber-900">
          We are a research and comparison site, not a testing lab. We do not run our own speed benchmarks or leak tests. Every rating on this site is derived from publicly verifiable sources: provider documentation, published pricing, privacy policies, jurisdiction, and independent third-party security audits. Where we cite performance figures, they come from published benchmarks by other organisations, not from our own measurements.
        </p>
      </div>

      <div className="space-y-5 mb-10">
        <div className="border border-slate-200 rounded-2xl p-5">
          <div className="font-semibold text-slate-900 mb-2">Published Performance Data</div>
          <p className="text-sm text-slate-700">
            We compare providers on the protocols they support (WireGuard, OpenVPN, IKEv2), their server counts and country coverage, and performance figures published by independent reviewers and the providers themselves. We label the source of any figure we quote.
          </p>
        </div>

        <div className="border border-slate-200 rounded-2xl p-5">
          <div className="font-semibold text-slate-900 mb-2">Privacy and Audit Record</div>
          <p className="text-sm text-slate-700">
            We review each provider's privacy policy, corporate ownership, and legal jurisdiction, and we check whether their no-logs claims have been examined in an independent third-party audit or tested in court. A provider with a recent published audit scores higher than one relying on marketing claims alone.
          </p>
        </div>

        <div className="border border-slate-200 rounded-2xl p-5">
          <div className="font-semibold text-slate-900 mb-2">Features and Platform Support</div>
          <p className="text-sm text-slate-700">
            We record which platforms each provider supports, and whether documented features such as a kill switch, split tunnelling, and DNS leak protection are offered and on which plans. This is drawn from official provider documentation.
          </p>
        </div>

        <div className="border border-slate-200 rounded-2xl p-5">
          <div className="font-semibold text-slate-900 mb-2">Pricing and Terms</div>
          <p className="text-sm text-slate-700">
            We compare current published pricing across monthly and multi-year plans, the number of simultaneous connections, and the refund window. Introductory pricing is noted separately from renewal pricing, since the two often differ substantially.
          </p>
        </div>
      </div>

      {/* Scoring breakdown */}
      <h2 className="text-xl font-bold mt-8 mb-4">How We Score VPNs</h2>
      <p className="text-slate-700 mb-4">
        Our final rating combines five dimensions. Here is how each one is weighted:
      </p>
      <div className="border border-slate-200 rounded-2xl overflow-hidden mb-10">
        <div className="bg-slate-50 px-5 py-3 font-semibold text-sm border-b border-slate-200">Scoring Breakdown</div>
        <div className="divide-y divide-slate-100">
          {[
            { label: "Performance", weight: "30%", detail: "Protocols supported, server coverage, published benchmark figures" },
            { label: "Privacy", weight: "25%", detail: "No-logs policy, jurisdiction, independent audits, leak protection" },
            { label: "Streaming", weight: "20%", detail: "Documented streaming support and reported unblocking reliability" },
            { label: "Price", weight: "15%", detail: "Value vs. features, renewal vs. introductory pricing" },
            { label: "Usability", weight: "10%", detail: "Platform coverage and documented app features" },
          ].map(({ label, weight, detail }) => (
            <div key={label} className="flex px-5 py-3 text-sm gap-4">
              <span className="w-28 shrink-0 font-medium">{label}</span>
              <span className="w-12 shrink-0 text-blue-600 font-semibold">{weight}</span>
              <span className="text-slate-500">{detail}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Update frequency */}
      <h2 className="text-xl font-bold mt-8 mb-3">How Often We Update</h2>
      <p className="text-slate-700 mb-4">
        We review each provider against the latest published information periodically. When a provider makes a significant change (a new protocol, an updated privacy policy, a new independent audit, or a price change), we re-score it and update the comparison. Dates shown on pages reflect the most recent review of the published sources.
      </p>
      <p className="text-slate-700 mb-10">
        Pricing and streaming support move fastest. Providers change renewal pricing often, and streaming platforms continually update their VPN detection, so always confirm current pricing and terms on the provider's own site before subscribing.
      </p>

      {/* Editorial independence */}
      <h2 className="text-xl font-bold mt-8 mb-3">Editorial Independence</h2>
      <p className="text-slate-700 mb-4">
        VPN Adviser earns affiliate commissions when you buy a VPN through some of our links. You pay exactly the same price either way. The commission does not affect our scores or rankings, and we include providers we earn nothing from, including some we rate highly.
      </p>
      <p className="text-slate-700 mb-10">
        We do not accept payment for reviews, sponsored placements, or "featured" spots.
        Read our full <Link href="/disclosure" className="text-blue-600 hover:underline">affiliate disclosure</Link> for details.
      </p>

      {/* Team */}
      <h2 className="text-xl font-bold mt-8 mb-3">Our Team</h2>
      <p className="text-slate-700 mb-4">
        Our reviewers have a combined 15+ years working in cybersecurity, digital privacy, and consumer technology. We have worked across network security, privacy advocacy, and technical journalism. Nobody on the team accepts free subscriptions, consulting fees, or any other form of compensation from VPN providers.
      </p>
      <p className="text-slate-700 mb-10">
        If you spot an error in any review, a broken test result, or outdated information, contact us. We correct mistakes publicly and update the review with a note showing what changed and when.
      </p>

      {/* Why we built this */}
      <h2 className="text-xl font-bold mt-8 mb-3">Why We Built This</h2>
      <p className="text-slate-700 mb-4">
        Most VPN review sites are owned by the VPN companies themselves, or take paid placements to push VPNs that pay more. We found that frustrating, so we built a resource we would actually use ourselves.
      </p>
      <p className="text-slate-700 mb-10">
        VPN Adviser started as a personal project to track test results across providers. It grew into this site because the gap between honest VPN testing and what most review sites publish was too wide to ignore.
      </p>

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mt-8">
        <div className="font-bold mb-1">Contact</div>
        <p className="text-sm text-slate-600">
          Have a question, a correction, or a press inquiry? Reach us at{" "}
          <a href="mailto:hello@vpnadviser.com" className="text-blue-600 hover:underline">
            hello@vpnadviser.com
          </a>
        </p>
      </div>
    </div>
  );
}
