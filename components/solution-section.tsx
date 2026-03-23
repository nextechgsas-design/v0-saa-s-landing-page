"use client"

import Image from "next/image"
import { Users, SlidersHorizontal, LayoutGrid } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function SolutionSection() {
  const { lang } = useLanguage()

  const items = [
    {
      icon: Users,
      title: { es: "Organiza proveedores", en: "Organize Vendors" },
      description: {
        es: "Centraliza todos tus proveedores y equipos en un solo lugar. Visualiza quién es quién y qué rol cumple en cada operación.",
        en: "Centralize all your vendors and teams in one place. See who is who and what role they play in each operation.",
      },
    },
    {
      icon: SlidersHorizontal,
      title: { es: "Define valores", en: "Define Values" },
      description: {
        es: "Asigna montos, condiciones y responsabilidades a cada proveedor. Sin cálculos manuales ni archivos duplicados.",
        en: "Assign amounts, conditions, and responsibilities to each vendor. No manual calculations or duplicate files.",
      },
    },
    {
      icon: LayoutGrid,
      title: { es: "Control total", en: "Total Control" },
      description: {
        es: "Obtén visibilidad completa del estado de cada proceso, pago y proveedor desde un único panel.",
        en: "Get complete visibility of each process, payment, and vendor status from a single dashboard.",
      },
    },
  ]

  return (
    <section id="solucion" className="py-24 px-6 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-widest text-background/50 mb-4">
          {lang === "es" ? "La solución" : "The Solution"}
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-background text-balance">
            {lang === "es"
              ? "NEXTECH te permite organizar toda tu operación en un solo lugar"
              : "NEXTECH lets you organize all your operations in one place"}
          </h2>
          <p className="text-background/70 leading-relaxed text-lg pt-1">
            {lang === "es"
              ? "Una plataforma diseñada para empresas que necesitan orden, claridad y control sin depender de herramientas dispersas."
              : "A platform designed for companies that need order, clarity, and control without relying on scattered tools."}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-background/10 rounded-2xl overflow-hidden">
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

        <div className="mt-16 flex justify-center">
          <div className="rounded-2xl overflow-hidden max-w-md">
            <Image
              src="/images/team-collaboration.jpg"
              alt={lang === "es" ? "Equipo tech colaborando" : "Tech team collaborating"}
              width={400}
              height={280}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
