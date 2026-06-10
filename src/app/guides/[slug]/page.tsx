import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

type Guide = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  content: string;
};

function loadGuide(slug: string): Guide | null {
  const guidesDir = path.join(process.cwd(), "content", "guides");
  const filePath = path.join(guidesDir, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8")) as Guide;
  } catch {
    return null;
  }
}

const GUIDE_SLUGS = [
  "how-to-set-up-a-vpn",
  "how-to-unblock-netflix-with-vpn",
  "how-to-torrent-safely",
  "vpn-kill-switch-explained",
  "vpn-protocols-explained",
  "free-vs-paid-vpn",
  "best-vpn-for-linux-2026",
];

export async function generateStaticParams() {
  return GUIDE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = loadGuide(slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | VPN Adviser`,
    description: guide.description,
  };
}

// Minimal markdown renderer — handles ##, **, *, and tables
function renderMarkdown(md: string): string {
  const lines = md.split("\n");
  const html: string[] = [];
  let inTable = false;
  let tableHeader = false;

  for (const rawLine of lines) {
    let line = rawLine
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    // Tables
    if (line.trim().startsWith("|")) {
      if (!inTable) {
        html.push('<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">');
        inTable = true;
        tableHeader = true;
      }
      if (/^\|[-| :]+\|$/.test(line.trim())) {
        tableHeader = false;
        continue;
      }
      const cells = line.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
      const tag = tableHeader ? "th" : "td";
      const cls = tableHeader
        ? 'class="bg-slate-100 font-semibold px-4 py-2 text-left border border-slate-200"'
        : 'class="px-4 py-2 border border-slate-200"';
      html.push(`<tr>${cells.map((c) => `<${tag} ${cls}>${c}</${tag}>`).join("")}</tr>`);
      continue;
    } else if (inTable) {
      html.push("</table></div>");
      inTable = false;
    }
    // Headings
    if (line.startsWith("### ")) {
      html.push(`<h3 class="text-lg font-bold mt-6 mb-2">${applyInline(line.slice(4))}</h3>`);
    } else if (line.startsWith("## ")) {
      html.push(`<h2 class="text-xl font-bold mt-8 mb-3">${applyInline(line.slice(3))}</h2>`);
    } else if (line.startsWith("# ")) {
      html.push(`<h2 class="text-xl font-bold mt-8 mb-3">${applyInline(line.slice(2))}</h2>`);
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      html.push(`<li class="ml-5 list-disc mb-1 leading-relaxed">${applyInline(line.slice(2))}</li>`);
    } else if (/^\d+\. /.test(line)) {
      html.push(`<li class="ml-5 list-decimal mb-1 leading-relaxed">${applyInline(line.replace(/^\d+\. /, ""))}</li>`);
    } else if (line.trim() === "") {
      html.push("<br>");
    } else {
      html.push(`<p class="mb-4 leading-relaxed">${applyInline(line)}</p>`);
    }
  }
  if (inTable) html.push("</table></div>");
  return html.join("\n");
}

function applyInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, '<code class="bg-slate-100 px-1 rounded text-sm font-mono">$1</code>');
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = loadGuide(slug);
  if (!guide) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="text-sm text-slate-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        {" / "}
        <Link href="/guides" className="hover:text-blue-600">Guides</Link>
        {" / "}
        <span>{guide.title}</span>
      </div>
      <div className="inline-block bg-slate-100 text-slate-600 text-xs font-medium px-3 py-1 rounded-full mb-4">
        {guide.category}
      </div>
      <h1 className="text-3xl font-bold mb-3">{guide.title}</h1>
      <p className="text-slate-500 text-sm mb-8">Updated {guide.date}</p>
      <div
        className="prose-style text-slate-800"
        dangerouslySetInnerHTML={{ __html: renderMarkdown(guide.content) }}
      />
      <div className="mt-12 border-t border-slate-200 pt-8">
        <Link href="/guides" className="text-blue-600 hover:underline text-sm">
          ← Back to all guides
        </Link>
      </div>
    </div>
  );
}
