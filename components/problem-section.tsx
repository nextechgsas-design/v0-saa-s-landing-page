import { FileSpreadsheet, Repeat, Database, EyeOff } from "lucide-react"

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Excel",
    description: "Hojas de cálculo que se desactualizan y generan errores al compartirlas.",
  },
  {
    icon: Repeat,
    title: "Transferencias manuales",
    description: "Múltiples pagos individuales sin trazabilidad ni orden centralizado.",
  },
  {
    icon: Database,
    title: "Información dispersa",
    description: "Datos de proveedores, equipos y procesos repartidos en distintas herramientas.",
  },
  {
    icon: EyeOff,
    title: "Falta de control",
    description: "Sin visibilidad clara del estado de cada operación ni de quién debe qué.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
          El problema
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            Muchas empresas gestionan su operación de forma manual
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg pt-1">
            Esto genera errores, pérdida de tiempo y falta de visibilidad. Cada equipo trabaja
            con su propia herramienta y la información nunca está en un solo lugar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {problems.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-background p-8 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl border border-border flex items-center justify-center">
                <Icon size={18} className="text-foreground" />
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
