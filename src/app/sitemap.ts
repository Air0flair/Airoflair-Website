import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://airoflair.com";

  return [
    // Main pages
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },

    // Products
    {
      url: `${baseUrl}/#solutions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/#products`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/#why`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },

    // External product URLs (these help with Bing/Google indexing your ecosystem)
    {
      url: `https://inspect.airoflair.com`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `https://splitbill.airoflair.com`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },

    // App Store links
    {
      url: `https://apps.apple.com/us/app/airoflair-quick-inspect/id6751975606`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `https://play.google.com/store/apps/details?id=com.airoflair.quickinspect`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `https://apps.apple.com/us/app/airoflair-data/id6749357700`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `https://play.google.com/store/apps/details?id=com.airoflair.data`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    }
  ];
}
