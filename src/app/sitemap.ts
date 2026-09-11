import type { MetadataRoute } from "next";

const base = "https://rzayyanr.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${base}/id`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { id: `${base}/id`, en: `${base}/en` } },
    },
    {
      url: `${base}/en`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { id: `${base}/id`, en: `${base}/en` } },
    },
    {
      url: `${base}/id/proyek`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { id: `${base}/id/proyek`, en: `${base}/en/projects` } },
    },
    {
      url: `${base}/en/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: { languages: { id: `${base}/id/proyek`, en: `${base}/en/projects` } },
    },
  ];
}
