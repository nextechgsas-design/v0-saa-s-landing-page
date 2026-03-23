import { Zap, ShieldCheck, Eye } from "lucide-react"

const cards = [
  {
    icon: Zap,
    title: "Automatización de datos",
    description:
      "La información se organiza automáticamente al ingresar tus operaciones. Sin copiar, pegar ni reformatear.",
  },
  {
    icon: ShieldCheck,
    title: "Reducción de errores",
    description:
      "Evita cálculos manuales y duplicaciones. Los datos fluyen de forma consistente entre proveedores y operaciones.",
  },
  {
    icon: Eye,
    title: "Claridad operativa",
    description:
      "Todo queda claro desde el inicio. Cada operación, cada proveedor y cada valor en el lugar correcto.",
  },
]

export function AutomationSection() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
          Automatización
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            Menos trabajo manual, más claridad
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            La plataforma procesa y organiza la información por ti, para que puedas enfocarte
            en lo que importa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, description }, i) => (
            <div
              key={title}
              className="border border-border rounded-2xl p-8 flex flex-col gap-5 hover:bg-muted/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl border border-border flex items-center justify-center">
                  <Icon size={18} className="text-foreground" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
