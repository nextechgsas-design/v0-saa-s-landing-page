const benefits = [
  {
    title: "Mayor control",
    description: "Cada operación, proveedor y valor en un solo lugar. Nada se pierde, nada queda sin registrar.",
    stat: "100%",
    statLabel: "visibilidad",
  },
  {
    title: "Menos errores",
    description: "Sin cálculos manuales ni archivos duplicados. La información se procesa de forma automática.",
    stat: "0",
    statLabel: "duplicados",
  },
  {
    title: "Menos trabajo manual",
    description: "Ahorra tiempo en tareas repetitivas. Tu equipo puede enfocarse en lo que realmente importa.",
    stat: "–80%",
    statLabel: "tiempo admin.",
  },
  {
    title: "Escalabilidad",
    description: "Crece sin límites. La plataforma se adapta a medida que tu operación se expande.",
    stat: "∞",
    statLabel: "operaciones",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-24 px-6 bg-foreground text-background border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-widest text-background/50 mb-4">
          Beneficios
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-background text-balance">
            Resultados concretos para tu operación
          </h2>
          <p className="text-background/70 leading-relaxed text-lg">
            Empresas que centralizan su operación con NEXTECH ganan en claridad, orden y
            capacidad de escalar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-background/10 rounded-2xl overflow-hidden">
          {benefits.map(({ title, description, stat, statLabel }) => (
            <div key={title} className="bg-foreground p-8 flex flex-col gap-4">
              <div className="mb-2">
                <span className="text-4xl font-bold text-background">{stat}</span>
                <span className="block text-sm text-background/50 mt-1">{statLabel}</span>
              </div>
              <h3 className="font-semibold text-background">{title}</h3>
              <p className="text-sm text-background/60 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
