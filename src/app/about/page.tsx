import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About VPN Adviser — How We Test & Rate VPNs",
  description: "VPN Adviser is an independent review site. We test VPNs ourselves and earn a commission if you buy through our links — at no extra cost to you.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">About VPN Adviser</h1>

      <p className="text-lg text-slate-600 mb-10">
        VPN Adviser is an independent website that tests and reviews VPN services. We don't take money for rankings. We don't publish paid reviews. Every score on this site reflects real testing by our team.
      </p>

      {/* Testing methodology */}
      <h2 className="text-xl font-bold mt-8 mb-4">Our Testing Methodology</h2>
      <p className="text-slate-700 mb-4">
        Every VPN on this site goes through the same structured evaluation. Here is exactly what we test and how.
      </p>

      <div className="space-y-5 mb-10">
        <div className="border border-slate-200 rounded-2xl p-5">
          <div className="font-semibold text-slate-900 mb-2">Speed Testing</div>
          <p className="text-sm text-slate-700">
            We measure download and upload speeds on three continents (Europe, North America, and Asia) using servers in each region. Each measurement runs three times and we take the median result. All speed tests use WireGuard or the provider's default protocol unless we're testing protocol-specific performance. We test on a 1 Gbps wired connection so our connection is never the bottleneck.
          </p>
        </div>

        <div className="border border-slate-200 rounded-2xl p-5">
          <div className="font-semibold text-slate-900 mb-2">Privacy and Leak Testing</div>
          <p className="text-sm text-slate-700">
            We run DNS leak tests via dnsleaktest.com and WebRTC leak checks via browserleaks.com on each VPN. We test the kill switch by force-disconnecting the network mid-transfer and checking whether any traffic escapes the tunnel. We also review each provider's privacy policy and jurisdiction, and check whether no-logs claims have been independently audited or court-tested.
          </p>
        </div>

        <div className="border border-slate-200 rounded-2xl p-5">
          <div className="font-semibold text-slate-900 mb-2">Streaming Performance</div>
          <p className="text-sm text-slate-700">
            We test unblocking against Netflix US, Netflix UK, BBC iPlayer, Disney+, and Amazon Prime. We check whether the VPN can access each service, whether playback is stable at HD quality, and whether the provider's dedicated streaming servers (where offered) perform better than standard servers. We retest streaming performance every six months since platforms actively block VPN IP ranges.
          </p>
        </div>

        <div className="border border-slate-200 rounded-2xl p-5">
          <div className="font-semibold text-slate-900 mb-2">App Testing</div>
          <p className="text-sm text-slate-700">
            We install and use each VPN on Windows 11, macOS 14, iOS 17, and Android 14. We check connection reliability, split tunnelling, the kill switch behaviour, and how easy the app is to navigate for a first-time user. We also test customer support response times and quality across live chat and email.
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
            { label: "Speed", weight: "30%", detail: "Download/upload across regions and protocols" },
            { label: "Privacy", weight: "25%", detail: "No-logs policy, jurisdiction, audits, leak protection" },
            { label: "Streaming", weight: "20%", detail: "Netflix, iPlayer, Disney+, and Prime unblocking reliability" },
            { label: "Price", weight: "15%", detail: "Value vs. features, long-term vs. monthly plans" },
            { label: "Usability", weight: "10%", detail: "App quality across Windows, Mac, iOS, and Android" },
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
        We re-test every VPN on this site every six months. When a provider makes a significant change (new protocol, updated privacy policy, major speed infrastructure upgrade, price change), we re-score that VPN immediately and update the review. Publication dates on reviews reflect the most recent full re-test.
      </p>
      <p className="text-slate-700 mb-10">
        Streaming performance is the fastest-moving area. Netflix, BBC iPlayer, and Disney+ constantly update their VPN detection. We run streaming checks monthly on our top-rated picks to catch any regressions.
      </p>

      {/* Editorial independence */}
      <h2 className="text-xl font-bold mt-8 mb-3">Editorial Independence</h2>
      <p className="text-slate-700 mb-4">
        VPN Adviser earns affiliate commissions when you buy a VPN through our links. You pay exactly the same price either way. The commission does not affect our scores or rankings. Our number-one pick earns a modest commission; some of the VPNs we score below average pay more. We would rather give you accurate information.
      </p>
      <p className="text-slate-700 mb-10">
        We do not accept payment for reviews, sponsored placements, or "featured" spots. We do not receive free subscriptions in exchange for coverage. Every VPN we review was purchased or trialled under standard consumer terms.
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
