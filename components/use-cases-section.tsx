"use client"

import { useLanguage } from "@/lib/language-context"

export function UseCasesSection() {
  const { lang } = useLanguage()

  const useCases = [
    {
      industry: { es: "Viajes", en: "Travel" },
      description: {
        es: "Organiza proveedores como hoteles, guías y transporte en cada operación turística.",
        en: "Organize vendors like hotels, guides, and transportation in each tourism operation.",
      },
      tags: {
        es: ["Hoteles", "Guías", "Transporte"],
        en: ["Hotels", "Guides", "Transportation"],
      },
    },
    {
      industry: { es: "Marketing", en: "Marketing" },
      description: {
        es: "Gestiona creadores, equipos y colaboradores en cada campaña de forma clara.",
        en: "Manage creators, teams, and collaborators in each campaign clearly.",
      },
      tags: {
        es: ["Creadores", "Plataformas", "Agencias"],
        en: ["Creators", "Platforms", "Agencies"],
      },
    },
    {
      industry: { es: "Construcción", en: "Construction" },
      description: {
        es: "Controla contratistas, subcontratistas y proveedores en cada proyecto.",
        en: "Control contractors, subcontractors, and vendors in each project.",
      },
      tags: {
        es: ["Contratistas", "Materiales", "Equipos"],
        en: ["Contractors", "Materials", "Equipment"],
      },
    },
    {
      industry: { es: "Inmobiliaria", en: "Real Estate" },
      description: {
        es: "Administra proveedores de mantenimiento, servicios y operación por propiedad.",
        en: "Manage maintenance, services, and operations vendors by property.",
      },
      tags: {
        es: ["Mantenimiento", "Administración", "Servicios"],
        en: ["Maintenance", "Management", "Services"],
      },
    },
  ]

  return (
    <section id="casos" className="py-24 px-6 border-t border-border bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
          {lang === "es" ? "Casos de uso" : "Use Cases"}
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            {lang === "es"
              ? "Diseñado para múltiples industrias"
              : "Designed for multiple industries"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {lang === "es"
              ? "Cualquier empresa que gestione proveedores y procesos puede organizar su operación con NEXTECH."
              : "Any company managing vendors and processes can organize their operations with NEXTECH."}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {useCases.map(({ industry, description, tags }) => (
            <div
              key={industry.es}
              className="bg-background border border-border rounded-2xl p-8 flex flex-col gap-4 hover:border-foreground/20 transition-colors"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {lang === "es" ? industry.es : industry.en}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {lang === "es" ? description.es : description.en}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {(lang === "es" ? tags.es : tags.en).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
