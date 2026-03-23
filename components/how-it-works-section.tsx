"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function HowItWorksSection() {
  const { lang } = useLanguage()

  const steps = [
    {
      number: "01",
      title: { es: "Crea tu operación", en: "Create your operation" },
      description: {
        es: "Define el proyecto o proceso que quieres gestionar. Agrega un nombre, contexto y fecha de inicio.",
        en: "Define the project or process you want to manage. Add a name, context, and start date.",
      },
    },
    {
      number: "02",
      title: { es: "Agrega proveedores", en: "Add vendors" },
      description: {
        es: "Incluye todos los proveedores, equipos o personas involucradas en la operación.",
        en: "Include all vendors, teams, or people involved in the operation.",
      },
    },
    {
      number: "03",
      title: { es: "Define valores", en: "Define values" },
      description: {
        es: "Asigna el valor correspondiente a cada proveedor. La plataforma calcula totales y pendientes automáticamente.",
        en: "Assign the corresponding value to each vendor. The platform calculates totals and pending amounts automatically.",
      },
    },
    {
      number: "04",
      title: { es: "Visualiza todo", en: "Visualize everything" },
      description: {
        es: "Accede a un panel claro con el estado de cada operación, proveedor y pago en tiempo real.",
        en: "Access a clear dashboard with the status of each operation, vendor, and payment in real time.",
      },
    },
  ]

  return (
    <section id="como-funciona" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
          {lang === "es" ? "Cómo funciona" : "How It Works"}
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            {lang === "es"
              ? "Configura tu operación en cuatro pasos"
              : "Configure your operation in four steps"}
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            {lang === "es"
              ? "Sin curva de aprendizaje. Sin configuraciones complejas. Solo ingresa tus datos y empieza a tener claridad."
              : "No learning curve. No complex configurations. Just enter your data and start gaining clarity."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden border border-border max-w-sm">
            <Image
              src="/images/dashboard-screen.jpg"
              alt={lang === "es" ? "Dashboard de gestión de operaciones" : "Operations management dashboard"}
              width={360}
              height={240}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="flex flex-col gap-4">
                <span className="text-4xl font-bold text-muted-foreground/20 font-mono tracking-tight">
                  {number}
                </span>
                <div className="w-full h-px bg-border" />
                <h3 className="font-semibold text-foreground">
                  {lang === "es" ? title.es : title.en}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {lang === "es" ? description.es : description.en}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
