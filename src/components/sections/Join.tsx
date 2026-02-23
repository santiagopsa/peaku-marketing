import Container from "../ui/Container";

type JoinProps = {
  locale?: "en" | "es";
};

export default function Join({ locale = "en" }: JoinProps) {
  const isEs = locale === "es";
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
                    required
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
