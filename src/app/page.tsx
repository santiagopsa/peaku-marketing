import type { Metadata } from "next";
import Nav from "@/components/Nav";
import VideoHero from "@/components/sections/VideoHero";
import Lore from "@/components/sections/Lore";
import Levels from "@/components/sections/Levels";
import StickySwap from "@/components/sections/StickySwap";
import Rewards from "@/components/sections/Rewards";
import Join from "@/components/sections/Join";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "PeakU | Recruiter guide to defend candidates with evidence",
  description:
    "PeakU helps recruiters present candidates with structured evidence and shared criteria. Get the guide via WhatsApp and reduce hiring rework.",
  keywords: [
    "recruiter guide",
    "recruiter tools",
    "hiring evidence framework",
    "candidate recommendation support",
    "reduce hiring rework",
    "hiring manager alignment",
  ],
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      en: `${SITE_URL}/`,
      es: `${SITE_URL}/es`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    locale: "en_US",
    title: "PeakU | Recruiter guide to defend candidates with evidence",
    description:
      "Practical guide for recruiters to present candidates with clarity, evidence, and shared criteria.",
    url: `${SITE_URL}/`,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "PeakU dashboard for recruiter decision support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PeakU | Recruiter guide to defend candidates with evidence",
    description:
      "Get the practical recruiter guide and receive it via WhatsApp.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <main id="top">
      <Nav />
      <VideoHero />
      <Lore />
      <Levels />
      <div id="thesis">
        <StickySwap />
      </div>
      <Rewards />
      <Join />
    </main>
  );
}
