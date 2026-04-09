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
        en: "We use different mechanisms, including stablecoins, based on what works best for each case.",
      },
    },
  ]

  return (
    <section id="pagos" className="py-24 px-6 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
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
                ? "Nuestra solución permite operar tanto a nivel local como internacional, integrando múltiples mecanismos —incluyendo stablecoins— para optimizar velocidad, costos y flexibilidad."
                : "Our solution enables local and international operations, integrating multiple mechanisms —including stablecoins— to optimize speed, cost, and flexibility."}
            </p>
          </div>
        </div>

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
