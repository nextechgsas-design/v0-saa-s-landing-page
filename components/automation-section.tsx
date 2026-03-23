"use client"

import { Zap, ShieldCheck, Eye } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function AutomationSection() {
  const { lang } = useLanguage()

  const cards = [
    {
      icon: Zap,
      title: { es: "Automatización de datos", en: "Data Automation" },
      description: {
        es: "La información se organiza automáticamente al ingresar tus operaciones. Sin copiar, pegar ni reformatear.",
        en: "Information is automatically organized when you enter your operations. No copying, pasting, or reformatting.",
      },
    },
    {
      icon: ShieldCheck,
      title: { es: "Reducción de errores", en: "Error Reduction" },
      description: {
        es: "Evita cálculos manuales y duplicaciones. Los datos fluyen de forma consistente entre proveedores y operaciones.",
        en: "Avoid manual calculations and duplications. Data flows consistently between vendors and operations.",
      },
    },
    {
      icon: Eye,
      title: { es: "Claridad operativa", en: "Operational Clarity" },
      description: {
        es: "Todo queda claro desde el inicio. Cada operación, cada proveedor y cada valor en el lugar correcto.",
        en: "Everything is clear from the start. Every operation, every vendor, and every value in the right place.",
      },
    },
  ]

  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
          {lang === "es" ? "Automatización" : "Automation"}
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            {lang === "es"
              ? "Menos trabajo manual, más claridad"
              : "Less manual work, more clarity"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {lang === "es"
              ? "La plataforma procesa y organiza la información por ti, para que puedas enfocarte en lo que importa."
              : "The platform processes and organizes information for you, so you can focus on what matters."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title.es}
              className="border border-border rounded-2xl p-8 flex flex-col gap-5 hover:bg-muted/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl border border-border flex items-center justify-center">
                  <Icon size={18} className="text-foreground" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  {lang === "es" ? title.es : title.en}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {lang === "es" ? description.es : description.en}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
