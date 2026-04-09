"use client"
import { Globe, MapPin, Zap, Coins, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function PaymentsSection() {
  const { lang } = useLanguage()

  const items = [
    {
      icon: Globe,
      title: { es: "Pagos Internacionales", en: "International Payments" },
      description: {
        es: "Liquidación rápida mediante rieles tradicionales y stablecoins.",
        en: "Fast settlement through traditional rails and stablecoins.",
      },
    },
    {
      icon: MapPin,
      title: { es: "Pagos Locales", en: "Local Payments" },
      description: {
        es: "Gestión de transacciones domésticas con total flexibilidad.",
        en: "Manage domestic transactions with full flexibility.",
      },
    },
    {
      icon: Zap,
      title: { es: "Dispersión Masiva", en: "Mass Disbursement" },
      description: {
        es: "Pagos múltiples en una sola operación a cuentas o wallets.",
        en: "Multiple payments in a single operation to accounts or wallets.",
      },
    },
    {
      icon: Coins,
      title: { es: "Eficiencia con Stablecoins", en: "Stablecoin Efficiency" },
      description: {
        es: "Menores costos y disponibilidad 24/7 usando activos digitales.",
        en: "Lower costs and 24/7 availability using digital assets.",
      },
    },
  ]

  return (
    <section id="pagos" className="py-16 px-6 bg-foreground text-background">
      <div className="max-w-5xl mx-auto">
        {/* Header más compacto */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-background/10 pb-8">
          <div className="max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-background/40 mb-2">
              {lang === "es" ? "Infraestructura de Pagos" : "Payment Infrastructure"}
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-balance">
              {lang === "es"
                ? "Operaciones globales y locales impulsadas por Stablecoins"
                : "Global and local operations powered by Stablecoins"}
            </h2>
          </div>
          <p className="text-background/60 text-sm md:text-base max-w-sm leading-relaxed">
            {lang === "es"
              ? "Optimizamos la velocidad y el costo de sus transferencias integrando tecnología blockchain y rieles bancarios."
              : "We optimize transfer speed and cost by integrating blockchain technology and banking rails."}
          </p>
        </div>

        {/* Grid de items más denso y legible */}
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8">
          {items.map(({ icon: Icon, title, description }) => (
            <div key={title.es} className="group flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-background/5 border border-background/10 flex items-center justify-center group-hover:border-background/30 transition-colors">
                  <Icon size={18} className="text-background" />
                </div>
              </div>
              <div>
                <h3 className="font-medium text-background mb-1">
                  {lang === "es" ? title.es : title.en}
                </h3>
                <p className="text-sm text-background/50 leading-snug">
                  {lang === "es" ? description.es : description.en}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer de sección con foco en conversión */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xs text-background/40">
            <CheckCircle2 size={14} className="text-green-500" />
            <span>{lang === "es" ? "Liquidación inmediata disponible" : "Instant settlement available"}</span>
          </div>
          <div className="flex gap-3">
            <a
              href="#contacto"
              className="px-5 py-2.5 rounded-full bg-background text-foreground font-medium text-xs hover:opacity-90 transition-opacity"
            >
              {lang === "es" ? "Hablar con un experto" : "Talk to an expert"}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
