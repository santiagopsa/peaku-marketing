import Link from "next/link";
import type { Metadata } from "next";
import GoogleAdsConversion from "@/components/GoogleAdsConversion";

export const metadata: Metadata = {
  title: "Gracias | PeakU",
  description: "Pagina de gracias despues de solicitar la guia por WhatsApp.",
};

export default function ThanksPageEs() {
  return (
    <main className="min-h-screen bg-firo-bg px-5 py-24 text-firo-text md:px-8">
      <GoogleAdsConversion />
      <div className="mx-auto w-full max-w-3xl rounded-3xl border border-firo-line bg-white p-8 shadow-soft md:p-10">
        <p className="text-sm font-semibold text-firo-blue">Solicitud enviada</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
          Gracias. Te enviaremos la guía al número de WhatsApp que nos compartiste.
        </h1>
        <p className="mt-4 text-firo-muted">
          Recibimos tus datos correctamente. Si quieres, puedes volver al inicio.
        </p>
        <div className="mt-8">
          <Link
            href="/es"
            className="inline-flex rounded-xl bg-firo-blue px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
