import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Container from "@/components/ui/Container";
import { getBreadcrumbSchema, getWebPageSchema } from "@/lib/seoSchemas";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre FIRO | Tesis y modelo operativo con leasing",
  description:
    "Conoce qué es FIRO, para quién es, qué problema resuelve, cómo funciona el modelo con leasing y la visión de crecimiento en activos robóticos.",
  keywords: [
    "sobre FIRO",
    "modelo operativo con leasing",
    "inversión en robótica",
    "tesis FIRO",
    "cashflow robótica",
  ],
  alternates: {
    canonical: `${SITE_URL}/es/about`,
    languages: {
      en: `${SITE_URL}/about`,
      es: `${SITE_URL}/es/about`,
      "x-default": `${SITE_URL}/about`,
    },
  },
  openGraph: {
    locale: "es_ES",
    title: "Sobre FIRO | Tesis y modelo operativo con leasing",
    description:
      "Resumen de FIRO para inversionistas y entusiastas: tesis de mercado, operación y contacto.",
    url: `${SITE_URL}/es/about`,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "Resumen de FIRO y su modelo operativo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre FIRO | Tesis y modelo operativo con leasing",
    description:
      "Conoce la tesis de FIRO, su operación y cómo funciona su estructura de leasing.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function AboutPageEs() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Inicio", url: `${SITE_URL}/es` },
    { name: "Sobre FIRO", url: `${SITE_URL}/es/about` },
  ]);
  const webPageSchema = getWebPageSchema({
    name: "Sobre FIRO",
    description:
      "Resumen de FIRO para inversionistas y entusiastas: tesis de mercado, operación y contacto.",
    url: `${SITE_URL}/es/about`,
    inLanguage: "es",
  });

  return (
    <main id="top">
      <Nav locale="es" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <section className="bg-gradient-to-b from-firo-navy via-slate-900 to-slate-950 pb-20 pt-28 text-white">
        <Container>
          <div className="max-w-3xl">
            <div className="text-sm font-semibold text-firo-blue">Sobre FIRO</div>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
              Robótica humanoide estructurada para cashflow con leasing.
            </h1>
            <p className="mt-5 text-white/75 md:text-lg">
              FIRO convierte robots humanoides en activos operativos con leasing:
              despliegue claro, métricas transparentes y pagos por escenarios.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-firo-line bg-firo-bg p-6">
              <h2 className="text-2xl font-semibold tracking-tight">Para quién es FIRO</h2>
              <p className="mt-3 text-firo-muted">
                Para inversionistas que buscan exposición a cashflow en robótica, y para
                entusiastas de tecnología que quieren participar en esta transición.
              </p>
            </div>
            <div className="rounded-2xl border border-firo-line bg-firo-bg p-6">
              <h2 className="text-2xl font-semibold tracking-tight">Problema que resolvemos</h2>
              <p className="mt-3 text-firo-muted">
                La demanda existe, pero el financiamiento y la operación están fragmentados.
                FIRO integra estructura de leasing, despliegue, operación, control de riesgo y visibilidad de pagos.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="thesis" className="bg-firo-bg py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Cómo funciona (alto nivel)
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-firo-line bg-white p-6 shadow-soft">
              <div className="text-sm font-semibold text-firo-blue">1. Financiar leasing</div>
              <p className="mt-2 text-firo-muted">
                El inversionista entra financiando una estructura de leasing mensual.
              </p>
            </div>
            <div className="rounded-2xl border border-firo-line bg-white p-6 shadow-soft">
              <div className="text-sm font-semibold text-firo-blue">2. Despliegue</div>
              <p className="mt-2 text-firo-muted">
                FIRO coloca unidades en ambientes de demanda con operación supervisada.
              </p>
            </div>
            <div className="rounded-2xl border border-firo-line bg-white p-6 shadow-soft">
              <div className="text-sm font-semibold text-firo-blue">3. Seguimiento y pago</div>
              <p className="mt-2 text-firo-muted">
                Se registran bruto, neto operativo, cobertura de leasing y reparto mensual.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="roi" className="bg-white py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Estado actual
          </h2>
          <p className="mt-4 max-w-3xl text-firo-muted">
            Hoy estamos buscando inversionistas, idealmente vinculados a la industria de eventos
            y capitalistas estratégicos para escalar el despliegue comercial.
          </p>
          <h3 className="mt-10 text-2xl font-semibold tracking-tight">Tesis / visión</h3>
          <p className="mt-3 max-w-3xl text-firo-muted">
            La robótica será infraestructura operativa. Nuestra tesis es que el financiamiento
            por leasing + operación disciplinada construye cashflow escalable y transparente.
          </p>
        </Container>
      </section>

      <section id="quote" className="bg-white py-20">
        <Container>
          <div className="rounded-3xl border border-firo-line bg-firo-bg p-8 shadow-soft md:p-10">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Contacto
            </h2>
            <p className="mt-3 text-firo-muted">
              Deja tus datos y te compartimos resumen, supuestos y siguientes pasos.
            </p>

            <form
              action="https://formsubmit.co/santiagopsa@gmail.com"
              method="POST"
              className="mt-8 grid gap-4 md:grid-cols-3"
            >
              <input type="hidden" name="_subject" value="FIRO About Page Contact (ES)" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <input
                name="name"
                required
                className="rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                placeholder="Nombre"
              />
              <input
                name="email"
                type="email"
                required
                className="rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                placeholder="Correo electrónico"
              />
              <input
                name="phone"
                required
                className="rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                placeholder="Teléfono"
              />

              <button
                type="submit"
                className="md:col-span-3 rounded-xl bg-firo-blue px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
              >
                Contactar a FIRO
              </button>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}
