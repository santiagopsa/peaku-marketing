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
  title: "PeakU | Guía para reclutadores que necesitan respaldo interno",
  description:
    "PeakU te ayuda a presentar candidatos con evidencia estructurada y criterios compartidos. Recibe la guía directamente por WhatsApp.",
  keywords: [
    "guía para reclutadores",
    "herramientas para reclutadores",
    "respaldo interno en reclutamiento",
    "evidencia estructurada selección",
    "defender candidatos",
    "reducir reprocesos de selección",
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
    title: "PeakU | Reclutamiento con evidencia y confianza interna",
    description:
      "Guía práctica para reclutadores: presenta candidatos con claridad, evidencia y menos discusiones subjetivas.",
    url: `${SITE_URL}/es`,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "Dashboard de PeakU para respaldar decisiones de selección",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PeakU | Guía para reclutadores con evidencia y claridad",
    description:
      "Recibe la guía de reclutamiento por WhatsApp y mejora cómo presentas candidatos.",
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
