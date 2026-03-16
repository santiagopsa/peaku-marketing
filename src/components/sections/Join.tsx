"use client";

import { FormEvent } from "react";
import Container from "../ui/Container";

const FORM_REDIRECT_BASE_URL =
  "https://main.d62zunsnnqb4y.amplifyapp.com";

type JoinProps = {
  locale?: "en" | "es";
};

const phoneIsValid = (value: string) => {
  const digitsOnly = value.replace(/\D/g, "");
  return digitsOnly.length >= 10;
};

const getPopupMessage = (isEs: boolean) =>
  isEs
    ? "La guía se envía por WhatsApp. Si el número no es correcto, no te va a llegar. Además, te regalamos dentro de la guia un GPT para que hagas este proceso mejor. No vamos a enviarte SPAM."
    : "The guide is sent through WhatsApp. If your number is wrong, you won\'t receive it. We also include a GPT inside the guide to make this process better. We won\'t send you SPAM.";

export default function Join({ locale = "en" }: JoinProps) {
  const isEs = locale === "es";
  const thankYouPath = isEs ? "/es/thanks" : "/thanks";
  const thankYouUrl = `${FORM_REDIRECT_BASE_URL}${thankYouPath}`;
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const nameValue = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
    const phoneValue = (form.elements.namedItem("whatsapp") as HTMLInputElement)?.value || "";

    if (!nameValue.trim()) {
      window.alert(isEs ? "Por favor ingresa tu nombre." : "Please enter your name.");
      return;
    }

    if (!phoneIsValid(phoneValue)) {
      window.alert(getPopupMessage(isEs));
      return;
    }

    const data = new FormData(form);
    data.set("_subject", "PeakU Guia gratuita para reclutadores");
    data.set("_captcha", "false");
    data.set("_template", "table");
    data.set("_cc", "santiago@peaku.co");

    try {
      const response = await fetch("https://formsubmit.co/luisa@peaku.co", {
        method: "POST",
        body: data,
      });
      if (!response.ok) {
        throw new Error("Error sending form");
      }
      window.location.href = thankYouUrl;
    } catch (error) {
      window.alert(isEs
        ? "Ocurrió un error al enviar. Intenta nuevamente."
        : "There was an error sending the form. Please try again.");
      console.error(error);
    }
  };

  return (
    <section id="join" className="bg-firo-bg py-24">
      <Container>
        <div className="rounded-3xl border border-firo-line bg-firo-bg p-8 shadow-soft md:p-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {isEs
                  ? "Cómo defender tus candidatos sin entrar en discusiones subjetivas"
                  : "Free guide: How to defend your candidates without subjective debates"}
              </h2>
              <p className="mt-3 text-firo-muted">
                {isEs
                  ? "Un framework práctico para presentar candidatos con claridad, datos y argumentos que los líderes sí entienden. Te enviamos la guía directamente por WhatsApp."
                  : "A practical framework recruiters use to present candidates with clarity, evidence, and arguments leaders can understand. We will send the guide directly to your WhatsApp."}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <form
                action="https://formsubmit.co/luisa@peaku.co"
                method="POST"
                noValidate
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="_subject" value="PeakU Guia gratuita para reclutadores" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_cc" value="santiago@peaku.co" />

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="name">
                    {isEs ? "Nombre" : "Name"}
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                    placeholder={isEs ? "Tu nombre completo" : "Your full name"}
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-firo-text" htmlFor="whatsapp">
                    {isEs ? "Número de WhatsApp" : "WhatsApp number"}
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    inputMode="tel"
                    required
                    pattern="^\+?[0-9\s\-()]{10,}$"
                    title={isEs ? "Ingresa un número válido con al menos 10 dígitos" : "Enter a valid number with at least 10 digits"}
                    className="w-full rounded-xl border border-firo-line bg-white px-4 py-3 text-sm outline-none focus:border-firo-blue"
                    placeholder={isEs ? "+57 300 000 0000" : "+1 (555) 000-0000"}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-firo-blue px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
                >
                  {isEs ? "👉 Quiero recibir la guía por WhatsApp" : "Send guide via WhatsApp"}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-6 text-xs text-firo-muted">
            {isEs
              ? "Solo recibirás la guía. Sin spam."
              : "No spam. We only use your WhatsApp to send the guide."}
          </div>
        </div>
      </Container>
    </section>
  );
}
