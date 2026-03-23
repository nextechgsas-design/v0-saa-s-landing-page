"use client"

import { FileSpreadsheet, Repeat, Database, EyeOff } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ProblemSection() {
  const { lang } = useLanguage()

  const problems = [
    {
      icon: FileSpreadsheet,
      title: "Excel",
      description: {
        es: "Hojas de cálculo que se desactualizan y generan errores al compartirlas.",
        en: "Spreadsheets that become outdated and cause errors when shared.",
      },
    },
    {
      icon: Repeat,
      title: { es: "Transferencias manuales", en: "Manual Transfers" },
      description: {
        es: "Múltiples pagos individuales sin trazabilidad ni orden centralizado.",
        en: "Multiple individual payments without traceability or centralized order.",
      },
    },
    {
      icon: Database,
      title: { es: "Información dispersa", en: "Scattered Information" },
      description: {
        es: "Datos de proveedores, equipos y procesos repartidos en distintas herramientas.",
        en: "Vendor, team, and process data spread across different tools.",
      },
    },
    {
      icon: EyeOff,
      title: { es: "Falta de control", en: "Lack of Control" },
      description: {
        es: "Sin visibilidad clara del estado de cada operación ni de quién debe qué.",
        en: "No clear visibility of each operation status or who owes what.",
      },
    },
  ]

  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
          {lang === "es" ? "El problema" : "The Problem"}
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            {lang === "es"
              ? "Muchas empresas gestionan su operación de forma manual"
              : "Many companies manage their operations manually"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg pt-1">
            {lang === "es"
              ? "Esto genera errores, pérdida de tiempo y falta de visibilidad. Cada equipo trabaja con su propia herramienta y la información nunca está en un solo lugar."
              : "This causes errors, wasted time, and lack of visibility. Each team works with its own tool and information is never in one place."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {problems.map(({ icon: Icon, title, description }) => (
            <div
              key={typeof title === "string" ? title : title.es}
              className="bg-background p-8 flex flex-col gap-4"
            >
              <div className="w-10 h-10 rounded-xl border border-border flex items-center justify-center">
                <Icon size={18} className="text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">
                {typeof title === "string" ? title : lang === "es" ? title.es : title.en}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {lang === "es" ? description.es : description.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
