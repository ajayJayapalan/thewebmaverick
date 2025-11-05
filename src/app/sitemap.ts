// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thewebmaverick.com";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/css-tools/shades-and-tints`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // ✅ Add more tools here as you release them
    // { url: `${baseUrl}/css-tools/gradients`, lastModified: new Date(), priority: 0.9 },
  ];
}
