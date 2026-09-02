"use client"

import { ArrowRight, Building2, Check, CircleDollarSign, ShieldCheck } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function OtcLiquiditySection() {
  const { lang } = useLanguage()

  const benefits = [
    {
      icon: CircleDollarSign,
      title: { es: "Liquidez en USDT", en: "USDT liquidity" },
      description: {
        es: "Accede a liquidez estable para tus operaciones de forma simple y eficiente.",
        en: "Access stable liquidity for your operations simply and efficiently.",
      },
    },
    {
      icon: Building2,
      title: { es: "Pesos en tu cuenta", en: "COP in your account" },
      description: {
        es: "Recibe pesos colombianos directamente en la cuenta bancaria de tu empresa.",
        en: "Receive Colombian pesos directly in your company bank account.",
      },
    },
    {
      icon: ShieldCheck,
      title: { es: "Proceso seguro", en: "Secure process" },
      description: {
        es: "Opera con acompañamiento especializado y trazabilidad en cada transacción.",
        en: "Operate with specialist support and traceability for every transaction.",
      },
    },
    {
      icon: Check,
      title: { es: "Más eficiencia", en: "More efficiency" },
      description: {
        es: "Reduce fricciones y optimiza tiempos en la conversión de USDT a COP.",
        en: "Reduce friction and optimize the time required to convert USDT to COP.",
      },
    },
  ]

  return (
    <section id="liquidez" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              {lang === "es" ? "Liquidez OTC" : "OTC liquidity"}
            </p>
            <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {lang === "es"
                ? "Convierte USDT a pesos colombianos con confianza"
                : "Convert USDT to Colombian pesos with confidence"}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {lang === "es"
                ? "Facilitamos la compra y venta de USDT para que recibas pesos colombianos directamente en la cuenta bancaria de tu empresa."
                : "We facilitate the purchase and sale of USDT so you can receive Colombian pesos directly in your company bank account."}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                {lang === "es" ? "Hablar con un especialista" : "Talk to a specialist"}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <span className="text-sm text-muted-foreground">
                {lang === "es" ? "Atención personalizada" : "Personalized support"}
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-muted/30 p-6 md:p-8">
            <p className="text-sm font-medium text-foreground">
              {lang === "es" ? "Una solución pensada para empresas" : "A solution built for businesses"}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {lang === "es"
                ? "Ideal para compañías que necesitan mover liquidez entre activos digitales y el sistema financiero colombiano."
                : "Ideal for companies that need to move liquidity between digital assets and the Colombian financial system."}
            </p>
            <div className="mt-8 grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2">
              {benefits.map(({ icon: Icon, title, description }) => (
                <div key={title.es} className="flex flex-col gap-3 bg-background p-5">
                  <Icon size={19} className="text-foreground" aria-hidden="true" />
                  <h3 className="text-sm font-semibold text-foreground">
                    {lang === "es" ? title.es : title.en}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {lang === "es" ? description.es : description.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {lang === "es"
              ? "Conectamos esta operación con nuestra red de pagos locales e internacionales para ayudarte a mover fondos de manera más ágil."
              : "We connect this operation to our local and international payments network to help you move funds more efficiently."}
          </p>
        </div>
      </div>
    </section>
  )
}
