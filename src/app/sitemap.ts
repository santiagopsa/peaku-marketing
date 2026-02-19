import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: `${SITE_URL}/`,
          es: `${SITE_URL}/es`,
          "x-default": `${SITE_URL}/`,
        },
      },
    },
    {
      url: `${SITE_URL}/es`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${SITE_URL}/`,
          es: `${SITE_URL}/es`,
          "x-default": `${SITE_URL}/`,
        },
      },
    },
    {
      url: `${SITE_URL}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/about`,
          es: `${SITE_URL}/es/about`,
          "x-default": `${SITE_URL}/about`,
        },
      },
    },
    {
      url: `${SITE_URL}/es/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${SITE_URL}/about`,
          es: `${SITE_URL}/es/about`,
          "x-default": `${SITE_URL}/about`,
        },
      },
    },
    {
      url: `${SITE_URL}/investors`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${SITE_URL}/investors`,
          es: `${SITE_URL}/es/investors`,
          "x-default": `${SITE_URL}/investors`,
        },
      },
    },
    {
      url: `${SITE_URL}/es/investors`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: `${SITE_URL}/investors`,
          es: `${SITE_URL}/es/investors`,
          "x-default": `${SITE_URL}/investors`,
        },
      },
    },
  ];
}
