const fallbackSiteUrl = "https://www.firoassets.com";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ?? fallbackSiteUrl;

export const SITE_NAME = "PeakU";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/hero/dashboard.png`;
