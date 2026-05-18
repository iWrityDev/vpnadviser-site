import type { MetadataRoute } from "next";
import { vpns } from "@/data/vpns";
import { useCases } from "@/data/usecases";
import { getAllPosts } from "@/data/posts";

const BASE = "https://vpnadviser.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE, priority: 1.0 },
    { url: `${BASE}/reviews`, priority: 0.9 },
    { url: `${BASE}/compare`, priority: 0.8 },
    { url: `${BASE}/best-vpn-for`, priority: 0.8 },
    { url: `${BASE}/blog`, priority: 0.7 },
    { url: `${BASE}/guides`, priority: 0.7 },
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

  const blogPages = getAllPosts().map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...reviewPages, ...comparePages, ...useCasePages, ...blogPages];
}
