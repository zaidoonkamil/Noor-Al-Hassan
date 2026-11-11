import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return locales.map((l) => ({ url: `${site}/${l}`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }));
}
