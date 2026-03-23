const steps = [
  {
    number: "01",
    title: "Crea tu operación",
    description:
      "Define el proyecto o proceso que quieres gestionar. Agrega un nombre, contexto y fecha de inicio.",
  },
  {
    number: "02",
    title: "Agrega proveedores",
    description:
      "Incluye todos los proveedores, equipos o personas involucradas en la operación.",
  },
  {
    number: "03",
    title: "Define valores",
    description:
      "Asigna el valor correspondiente a cada proveedor. La plataforma calcula totales y pendientes automáticamente.",
  },
  {
    number: "04",
    title: "Visualiza todo",
    description:
      "Accede a un panel claro con el estado de cada operación, proveedor y pago en tiempo real.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
          Cómo funciona
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance">
            Configura tu operación en cuatro pasos
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Sin curva de aprendizaje. Sin configuraciones complejas. Solo ingresa tus datos
            y empieza a tener claridad.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ number, title, description }) => (
            <div key={number} className="flex flex-col gap-4">
              <span className="text-4xl font-bold text-muted-foreground/20 font-mono tracking-tight">
                {number}
              </span>
              <div className="w-full h-px bg-border" />
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
