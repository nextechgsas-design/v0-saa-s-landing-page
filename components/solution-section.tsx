import { Users, SlidersHorizontal, LayoutGrid } from "lucide-react"

const items = [
  {
    icon: Users,
    title: "Organiza proveedores",
    description:
      "Centraliza todos tus proveedores y equipos en un solo lugar. Visualiza quién es quién y qué rol cumple en cada operación.",
  },
  {
    icon: SlidersHorizontal,
    title: "Define valores",
    description:
      "Asigna montos, condiciones y responsabilidades a cada proveedor. Sin cálculos manuales ni archivos duplicados.",
  },
  {
    icon: LayoutGrid,
    title: "Control total",
    description:
      "Obtén visibilidad completa del estado de cada proceso, pago y proveedor desde un único panel.",
  },
]

export function SolutionSection() {
  return (
    <section id="solucion" className="py-24 px-6 bg-foreground text-background">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-widest text-background/50 mb-4">
          La solución
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-background text-balance">
            NEXTECH te permite organizar toda tu operación en un solo lugar
          </h2>
          <p className="text-background/70 leading-relaxed text-lg pt-1">
            Una plataforma diseñada para empresas que necesitan orden, claridad y control
            sin depender de herramientas dispersas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-background/10 rounded-2xl overflow-hidden">
          {items.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="bg-foreground p-8 flex flex-col gap-4 relative">
              {i < items.length - 1 && (
                <div className="hidden md:block absolute right-0 top-8 bottom-8 w-px bg-background/10" />
              )}
              <div className="w-10 h-10 rounded-xl border border-background/20 flex items-center justify-center">
                <Icon size={18} className="text-background" />
              </div>
              <h3 className="font-semibold text-background text-lg">{title}</h3>
              <p className="text-sm text-background/70 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
