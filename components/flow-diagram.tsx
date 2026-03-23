"use client"

import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function FlowDiagram() {
  const { lang } = useLanguage()

  const steps = [
    { es: "Cliente", en: "Client" },
    { es: "Operación", en: "Operation" },
    { es: "Proveedores", en: "Vendors" },
    { es: "Organización", en: "Organization" },
    { es: "Infraestructura", en: "Infrastructure" },
  ]

  return (
    <section className="py-16 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {steps.map((step, index) => (
            <div key={step.es} className="flex items-center">
              <div className="border border-border bg-background px-6 py-3 rounded-xl">
                <span className="text-sm font-medium text-foreground">
                  {lang === "es" ? step.es : step.en}
                </span>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight
                  size={16}
                  className="text-muted-foreground mx-3 hidden md:block"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
