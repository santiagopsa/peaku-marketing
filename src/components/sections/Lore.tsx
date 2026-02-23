"use client";

import { useEffect, useRef } from "react";
import Container from "../ui/Container";
import { ensureGsap } from "@/lib/gsap";

type LoreProps = {
  locale?: "en" | "es";
};

export default function Lore({ locale = "en" }: LoreProps) {
  const isEs = locale === "es";
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { gsap } = ensureGsap();
    if (!root.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 75%" },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="lore" className="bg-firo-bg py-24 text-firo-text">
      <Container>
        <div className="max-w-3xl">
          {isEs ? (
            <>
              <div data-reveal className="text-sm font-semibold uppercase tracking-wide text-firo-blue">
                QUÉ APRENDERÁS
              </div>
              <h2 data-reveal className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Dentro de esta guía encontrarás un sistema práctico para:
              </h2>

              <ul data-reveal className="mt-8 space-y-3 text-firo-muted">
                <li>Obtener la información real que necesitan los tomadores de decisión.</li>
                <li>Definir el éxito del rol antes de empezar a buscar.</li>
                <li>Diseñar entrevistas que generen evidencia (no opiniones).</li>
                <li>Presentar candidatos de forma que reduzca la incertidumbre.</li>
                <li>Responder profesionalmente al “no me convenció”.</li>
                <li>Convertirte en un asesor, no solo en quien coordina el proceso.</li>
              </ul>

              <div data-reveal className="mt-10 rounded-2xl border border-firo-line bg-white p-6">
                <h3 className="text-xl font-semibold tracking-tight">
                  No es teoría. Es una guía de trabajo.
                </h3>
                <p className="mt-4 text-firo-muted">Incluye:</p>
                <ul className="mt-3 space-y-2 text-firo-muted">
                  <li>Plantilla de kickoff lista para usar.</li>
                  <li>Estructura de entrevista paso a paso.</li>
                  <li>Modelo de informe para presentar finalistas.</li>
                  <li>Checklist operativo para cada proceso.</li>
                </ul>
              </div>

              <div data-reveal className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-dashed border-firo-line bg-white p-6 text-sm text-firo-muted">
                  Screenshot real del documento 1
                </div>
                <div className="rounded-2xl border border-dashed border-firo-line bg-white p-6 text-sm text-firo-muted">
                  Screenshot real del documento 2
                </div>
              </div>

              <div data-reveal className="mt-10 rounded-2xl border border-firo-line bg-white p-6">
                <div className="text-sm font-semibold uppercase tracking-wide text-firo-blue">
                  AUTORIDAD
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  Construida desde experiencia real en procesos de contratación complejos
                </h3>
                <p className="mt-4 text-firo-muted">
                  Esta guía está basada en aprendizajes acumulados a lo largo de miles de procesos
                  de selección en empresas pequeñas, medianas, grandes y organizaciones Fortune 500.
                </p>
                <p className="mt-3 text-firo-muted">
                  Con más de 5.000 contrataciones exitosas y más de 10 años desarrollando procesos
                  efectivos, documentamos lo que sí funciona cuando las decisiones son difíciles y el
                  tiempo importa.
                </p>
                <p className="mt-3 text-firo-muted">
                  No es un enfoque académico. Es una guía práctica construida desde la operación real.
                </p>
              </div>
            </>
          ) : (
            <>
              <h2 data-reveal className="text-3xl font-semibold tracking-tight md:text-4xl">
                The recruiter’s invisible work
              </h2>
              <p data-reveal className="mt-4 text-firo-muted">
                You review hundreds of profiles, run structured interviews, and build strong recommendations.
              </p>
              <p data-reveal className="mt-3 text-firo-muted">
                And too often everything ends with one sentence: "I am not convinced."
              </p>

              <div className="mt-10 grid gap-4 md:grid-cols-3">
                <Card desc="You filter hundreds of profiles to separate signal from noise." />
                <Card desc="You structure interviews, evaluate skills, and compare evidence." />
                <Card desc="Without shared context, your recommendations are exposed to subjective calls." />
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}

function Card({ desc }: { desc: string }) {
  return (
    <div data-reveal className="rounded-2xl border border-firo-line bg-white p-5">
      <div className="text-sm text-firo-muted">{desc}</div>
    </div>
  );
}
