const footerLinks = [
  { label: "Solución", href: "#solucion" },
  { label: "Casos de uso", href: "#casos" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Empresa", href: "#empresa" },
  { label: "Contacto", href: "#contacto" },
]

export function Footer() {
  return (
    <footer id="empresa" className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <a href="#" className="text-foreground font-semibold text-lg tracking-tight">
          NEXTECH
        </a>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Legal */}
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} NEXTECH GLOBAL SAS
        </p>
      </div>
    </footer>
  )
}
