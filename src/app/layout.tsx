import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PeakU | Guide for recruiters who need internal backing",
    template: "%s | PeakU",
  },
  description:
    "PeakU helps recruiters defend candidates with structured evidence, clear reports, and hiring criteria that leaders can trust.",
  keywords: [
    "PeakU",
    "recruiter tools",
    "hiring decision support",
    "candidate evaluation framework",
    "evidence based hiring",
    "defend candidate recommendations",
    "reduce hiring rework",
    "recruitment process optimization",
    "herramientas para reclutadores",
    "respaldo interno reclutamiento",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      en: `${SITE_URL}/`,
      es: `${SITE_URL}/es`,
      "x-default": `${SITE_URL}/`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    title: "PeakU | Recruiter guide with structured hiring evidence",
    description:
      "Get the practical recruiter guide to present candidates with evidence and reduce subjective hiring feedback.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "PeakU dashboard preview for recruiter reports",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PeakU | Recruiter guide with structured hiring evidence",
    description:
      "A practical guide to help recruiters defend candidates with clear, comparable evidence.",
    images: [DEFAULT_OG_IMAGE],
  },
  category: "human resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-837109052"
          strategy="afterInteractive"
        />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-837109052');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
