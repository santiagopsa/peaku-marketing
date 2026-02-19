import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "PeakU | Guía para reclutadores que necesitan respaldo interno",
  description:
    "PeakU ayuda a reclutadores a defender candidatos con evidencia estructurada, reportes claros y criterios que líderes y equipos sí entienden.",
  keywords: [
    "PeakU",
    "guía para reclutadores",
    "herramientas para reclutadores",
    "respaldo interno",
    "evidencia estructurada",
    "defender candidatos",
    "reducir reprocesos de selección",
    "reclutamiento con datos",
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
    url: `${SITE_URL}/es`,
    siteName: "PeakU",
    title: "PeakU | Guía para reclutadores con evidencia y claridad",
    description:
      "Descarga la guía de PeakU y presenta candidatos con criterios claros, evidencia y menos discusiones subjetivas.",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "Dashboard de PeakU para reportes de reclutamiento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PeakU | Guía para reclutadores con evidencia y claridad",
    description:
      "Recibe una guía práctica para respaldar tus recomendaciones y reducir reprocesos de selección.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function EsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
