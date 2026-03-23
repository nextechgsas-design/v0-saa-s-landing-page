"use client"

import { useLanguage } from "@/lib/language-context"

export function BenefitsSection() {
  const { lang } = useLanguage()

  const benefits = [
    {
      title: { es: "Mayor control", en: "Greater Control" },
      description: {
        es: "Cada operación, proveedor y valor en un solo lugar. Nada se pierde, nada queda sin registrar.",
        en: "Every operation, vendor, and value in one place. Nothing is lost, nothing goes unrecorded.",
      },
      stat: "100%",
      statLabel: { es: "visibilidad", en: "visibility" },
    },
    {
      title: { es: "Menos errores", en: "Fewer Errors" },
      description: {
        es: "Sin cálculos manuales ni archivos duplicados. La información se procesa de forma automática.",
        en: "No manual calculations or duplicate files. Information is processed automatically.",
      },
      stat: "0",
      statLabel: { es: "duplicados", en: "duplicates" },
    },
    {
      title: { es: "Menos trabajo manual", en: "Less Manual Work" },
      description: {
        es: "Ahorra tiempo en tareas repetitivas. Tu equipo puede enfocarse en lo que realmente importa.",
        en: "Save time on repetitive tasks. Your team can focus on what really matters.",
      },
      stat: "–80%",
      statLabel: { es: "tiempo admin.", en: "admin time" },
    },
    {
      title: { es: "Escalabilidad", en: "Scalability" },
      description: {
        es: "Crece sin límites. La plataforma se adapta a medida que tu operación se expande.",
        en: "Grow without limits. The platform adapts as your operation expands.",
      },
      stat: "∞",
      statLabel: { es: "operaciones", en: "operations" },
    },
  ]

  return (
    <section className="py-24 px-6 bg-foreground text-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-widest text-background/50 mb-4">
          {lang === "es" ? "Beneficios" : "Benefits"}
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-background text-balance">
            {lang === "es"
              ? "Resultados concretos para tu operación"
              : "Concrete results for your operation"}
          </h2>
          <p className="text-background/70 leading-relaxed text-lg">
            {lang === "es"
              ? "Empresas que centralizan su operación con NEXTECH ganan en claridad, orden y capacidad de escalar."
              : "Companies that centralize their operations with NEXTECH gain clarity, order, and ability to scale."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-background/10 rounded-2xl overflow-hidden">
          {benefits.map(({ title, description, stat, statLabel }) => (
            <div key={title.es} className="bg-foreground p-8 flex flex-col gap-4">
              <div className="mb-2">
                <span className="text-4xl font-bold text-background">{stat}</span>
                <span className="block text-sm text-background/50 mt-1">
                  {lang === "es" ? statLabel.es : statLabel.en}
                </span>
              </div>
              <h3 className="font-semibold text-background">
                {lang === "es" ? title.es : title.en}
              </h3>
              <p className="text-sm text-background/60 leading-relaxed">
                {lang === "es" ? description.es : description.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
