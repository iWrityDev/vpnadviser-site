import type { MetadataRoute } from "next";
import { vpns } from "@/data/vpns";
import { useCases } from "@/data/usecases";
import { countries } from "@/data/countries";
import { getAllPosts } from "@/data/posts";
import { tools } from "@/data/tools";
import { deals } from "@/data/deals";

const BASE = "https://www.vpnadviser.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE, priority: 1.0 },
    { url: `${BASE}/reviews`, priority: 0.9 },
    { url: `${BASE}/compare`, priority: 0.8 },
    { url: `${BASE}/best-vpn-for`, priority: 0.8 },
    { url: `${BASE}/vpn-for`, priority: 0.9 },
    { url: `${BASE}/blog`, priority: 0.7 },
    { url: `${BASE}/guides`, priority: 0.7 },
    { url: `${BASE}/tools`, priority: 0.8 },
    { url: `${BASE}/deals`, priority: 0.9 },
    { url: `${BASE}/best-vpn`, priority: 1.0 },
    { url: `${BASE}/about`, priority: 0.4 },
    { url: `${BASE}/disclosure`, priority: 0.3 },
  ].map((p) => ({ ...p, lastModified: new Date(), changeFrequency: "weekly" as const }));

  const reviewPages = vpns.map((v) => ({
    url: `${BASE}/reviews/${v.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const comparePages: MetadataRoute.Sitemap = [];
  for (let i = 0; i < vpns.length; i++) {
    for (let j = i + 1; j < vpns.length; j++) {
      comparePages.push({
        url: `${BASE}/compare/${vpns[i].slug}-vs-${vpns[j].slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  const useCasePages = useCases.map((uc) => ({
    url: `${BASE}/best-vpn-for/${uc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const countryPages = countries.map((c) => ({
    url: `${BASE}/vpn-for/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogPages = getAllPosts().map((p) => {
    const parsed = new Date(p.date);
    return {
      url: `${BASE}/blog/${p.slug}`,
      // Guard: an unparseable date here throws RangeError and fails the entire build.
      lastModified: isNaN(parsed.getTime()) ? new Date() : parsed,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  const toolPages = tools.map((t) => ({
    url: `${BASE}/tools/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const dealPages = deals.map((d) => ({
    url: `${BASE}/deals/${d.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...reviewPages, ...comparePages, ...useCasePages, ...countryPages, ...blogPages, ...toolPages, ...dealPages];
}
