import { ArrowRight } from "lucide-react"
import { DashboardMockup } from "./dashboard-mockup"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-widest border border-border rounded-full px-4 py-1.5 w-fit">
            Plataforma operativa
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold leading-[1.15] tracking-tight text-foreground text-balance">
            Soluciones tecnológicas para organizar y gestionar operaciones empresariales
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            Centraliza proveedores, equipos y procesos en un solo lugar. Reduce el trabajo
            manual y gestiona tus pagos con control.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background font-medium text-sm px-6 py-3 rounded-full hover:opacity-80 transition-opacity"
            >
              Solicitar acceso
              <ArrowRight size={15} />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-medium text-sm px-6 py-3 rounded-full hover:bg-muted transition-colors"
            >
              Ver cómo funciona
            </a>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="hidden lg:block">
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}
