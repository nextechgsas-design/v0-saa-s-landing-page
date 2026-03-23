const useCases = [
  {
    industry: "Viajes",
    description: "Organiza proveedores como hoteles, guías y transporte en cada operación turística.",
    tags: ["Hoteles", "Guías", "Transporte"],
  },
  {
    industry: "Marketing",
    description: "Gestiona creadores, equipos y colaboradores en cada campaña de forma clara.",
    tags: ["Creadores", "Plataformas", "Agencias"],
  },
  {
    industry: "Construcción",
    description: "Controla contratistas, subcontratistas y proveedores en cada proyecto.",
    tags: ["Contratistas", "Materiales", "Equipos"],
  },
  {
    industry: "Inmobiliaria",
    description: "Administra proveedores de mantenimiento, servicios y operación por propiedad.",
    tags: ["Mantenimiento", "Administración", "Servicios"],
  },
]

export function UseCasesSection() {
  return (
    <section id="casos" className="py-24 px-6 border-t border-border bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
          Casos de uso
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            Diseñado para múltiples industrias
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Cualquier empresa que gestione proveedores y procesos puede organizar su
            operación con NEXTECH.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {useCases.map(({ industry, description, tags }) => (
            <div
              key={industry}
              className="bg-background border border-border rounded-2xl p-8 flex flex-col gap-4 hover:border-foreground/20 transition-colors"
            >
              <h3 className="text-xl font-semibold text-foreground">{industry}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag) => (
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
