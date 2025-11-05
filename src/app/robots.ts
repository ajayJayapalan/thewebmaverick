// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // You can block admin or dev routes if you ever add them:
      // { userAgent: "*", disallow: ["/drafts", "/private"] },
    ],
    sitemap: "https://thewebmaverick.com/sitemap.xml",
    host: "https://thewebmaverick.com",
  };
}
