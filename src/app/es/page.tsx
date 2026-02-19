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
  title: "PeakU | Partnership para coworkings y su comunidad",
  description:
    "Activa el partnership de PeakU en tu coworking y ofrece a tu comunidad una vacante premium sin costo.",
  keywords: [
    "partnership coworking",
    "beneficios para comunidad coworking",
    "vacante premium PeakU",
    "talento para coworking",
    "alianzas para coworkings",
    "PeakU coworkings",
  ],
  alternates: {
    canonical: `${SITE_URL}/es`,
    languages: {
      en: `${SITE_URL}/`,
      es: `${SITE_URL}/es`,
      "x-default": `${SITE_URL}/`,
    },
  },
  openGraph: {
    locale: "es_ES",
    title: "PeakU | Activa el partnership en tu coworking",
    description:
      "Dale a tu comunidad acceso directo a una vacante premium en PeakU y recibe un kit para difundir el beneficio.",
    url: `${SITE_URL}/es`,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "Partnership de PeakU para comunidades de coworkings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PeakU | Partnership para coworkings",
    description:
      "Activa gratis el partnership y comparte en tu comunidad el acceso a una vacante premium.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function PageEs() {
  return (
    <main id="top">
      <Nav locale="es" />
      <VideoHero locale="es" />
      <Lore locale="es" />
      <Levels locale="es" />
      <div id="thesis">
        <StickySwap locale="es" />
      </div>
      <Rewards locale="es" />
      <Join locale="es" />
    </main>
  );
}
