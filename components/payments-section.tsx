"use client"
import { Globe, MapPin, Zap, Link2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function PaymentsSection() {
  const { lang } = useLanguage()

  const items = [
    {
      icon: Globe,
      title: { es: "Pagos internacionales", en: "International Payments" },
      description: {
        es: "Ejecuta transferencias entre países de forma más ágil y eficiente.",
        en: "Execute cross-border transfers faster and more efficiently.",
      },
    },
    {
      icon: MapPin,
      title: { es: "Pagos locales", en: "Local Payments" },
      description: {
        es: "Gestiona movimientos dentro del país con mayor flexibilidad.",
        en: "Manage in-country transactions with greater flexibility.",
      },
    },
    {
      icon: Zap,
      title: { es: "Dispersión de fondos", en: "Fund Disbursement" },
      description: {
        es: "Realiza pagos a múltiples destinatarios desde una sola operación.",
        en: "Send payments to multiple recipients from a single operation.",
      },
    },
    {
      icon: Link2,
      title: { es: "Múltiples métodos", en: "Multiple Methods" },
      description: {
        es: "Utilizamos diferentes mecanismos, incluyendo stablecoins, según lo que mejor funcione en cada caso.",
        en: "We use different mechanisms — including stablecoins — based on what works best for each case.",
      },
    },
  ]

  return (
    <section id="pagos" className="py-24 px-6 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <p className="text-xs font-medium uppercase tracking-widest text-background/50 mb-4">
          {lang === "es" ? "Pagos" : "Payments"}
        </p>
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-background text-balance">
            {lang === "es"
              ? "Pagos locales e internacionales, sin fricción"
              : "Local and international payments, without friction"}
          </h2>
          <div className="flex flex-col gap-4 pt-1">
            <p className="text-background/70 leading-relaxed text-lg">
              {lang === "es"
                ? "Ayudamos a empresas a ejecutar pagos y dispersión de fondos de manera más rápida y eficiente."
                : "We help businesses execute payments and fund disbursements faster and more efficiently."}
            </p>
            <p className="text-background/50 leading-relaxed text-base">
              {lang === "es"
                ? "Nuestra solución integra múltiples mecanismos —incluyendo stablecoins— para optimizar velocidad, costos y flexibilidad en cada operación."
                : "Our solution integrates multiple mechanisms — including stablecoins — to optimize speed, cost, and flexibility in every operation."}
            </p>
          </div>
        </div>

        {/* Flow diagram */}
        <div className="mb-16 rounded-2xl border border-background/10 overflow-hidden bg-background/5 p-8 md:p-12">
          <p className="text-xs font-medium uppercase tracking-widest text-background/40 mb-8 text-center">
            {lang === "es" ? "Flujo de dinero" : "Money flow"}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">

            {/* Node: Tu empresa */}
            <div className="flex flex-col items-center gap-3 flex-1">
              <div className="w-14 h-14 rounded-2xl border border-background/20 bg-background/10 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-background">
                  <rect x="2" y="7" width="20" height="14" rx="2"/>
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                </svg>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-background">{lang === "es" ? "Tu empresa" : "Your company"}</p>
                <p className="text-xs text-background/40 mt-1">{lang === "es" ? "Origen del pago" : "Payment origin"}</p>
              </div>
            </div>

            {/* Connector 1 */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <div className="hidden md:flex items-center">
                <div className="w-10 h-px bg-background/25" />
                <svg width="8" height="8" viewBox="0 0 8 8" className="text-background/40 -ml-px"><path d="M0 1L6 4L0 7" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="md:hidden w-px h-6 bg-background/20" />
              <span className="text-xs text-background/40 px-2 py-0.5 rounded-full border border-background/10">
                {lang === "es" ? "Instrucción" : "Instruction"}
              </span>
            </div>

            {/* Node: NodoNext (centro — más grande y destacado) */}
            <div className="flex flex-col items-center gap-3 flex-1">
              <div className="w-16 h-16 rounded-2xl border border-background/30 bg-background/15 flex items-center justify-center ring-1 ring-background/20">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-background">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-background">NodoNext</p>
                <p className="text-xs text-background/40 mt-1">
                  {lang === "es" ? "Procesa y enruta" : "Processes & routes"}
                </p>
                <div className="flex gap-1 mt-2 justify-center flex-wrap">
                  <span className="text-xs bg-background/10 text-background/60 px-2 py-0.5 rounded-full border border-background/10">USDT</span>
                  <span className="text-xs bg-background/10 text-background/60 px-2 py-0.5 rounded-full border border-background/10">USDC</span>
                  <span className="text-xs bg-background/10 text-background/60 px-2 py-0.5 rounded-full border border-background/10">Wire</span>
                </div>
              </div>
            </div>

            {/* Connector 2 */}
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <div className="hidden md:flex items-center">
                <div className="w-10 h-px bg-background/25" />
                <svg width="8" height="8" viewBox="0 0 8 8" className="text-background/40 -ml-px"><path d="M0 1L6 4L0 7" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div className="md:hidden w-px h-6 bg-background/20" />
              <span className="text-xs text-background/40 px-2 py-0.5 rounded-full border border-background/10">
                {lang === "es" ? "Ejecución" : "Execution"}
              </span>
            </div>

            {/* Node: Destinatarios */}
            <div className="flex flex-col items-center gap-3 flex-1">
              <div className="flex -space-x-2">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border border-background/20 bg-background/10 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-background/70">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-background">{lang === "es" ? "Destinatarios" : "Recipients"}</p>
                <p className="text-xs text-background/40 mt-1">
                  {lang === "es" ? "Local · Internacional" : "Local · International"}
                </p>
              </div>
            </div>

          </div>

          {/* Bottom note */}
          <p className="text-center text-xs text-background/30 mt-8 border-t border-background/10 pt-6">
            {lang === "es"
              ? "Cada operación se enruta por el método más eficiente según destino y condiciones del momento"
              : "Each operation is routed through the most efficient method based on destination and current conditions"}
          </p>
        </div>

        {/* 4 feature blocks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-background/10 rounded-2xl overflow-hidden">
          {items.map(({ icon: Icon, title, description }, i) => (
            <div key={title.es} className="bg-foreground p-8 flex flex-col gap-4 relative">
              {i < items.length - 1 && (
                <div className="hidden md:block absolute right-0 top-8 bottom-8 w-px bg-background/10" />
              )}
              <div className="w-10 h-10 rounded-xl border border-background/20 flex items-center justify-center">
                <Icon size={18} className="text-background" />
              </div>
              <h3 className="font-semibold text-background text-lg">
                {lang === "es" ? title.es : title.en}
              </h3>
              <p className="text-sm text-background/70 leading-relaxed">
                {lang === "es" ? description.es : description.en}
              </p>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-background text-foreground font-medium text-sm hover:bg-background/90 transition-colors"
          >
            {lang === "es" ? "Agendar una cita" : "Schedule a call"}
          </a>
          <a
            href="#solucion"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-background/30 text-background font-medium text-sm hover:bg-background/10 transition-colors"
          >
            {lang === "es" ? "Explorar solución" : "Explore solution"}
          </a>
        </div>

      </div>
    </section>
  )
}
