"use client"

import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { lang } = useLanguage()

  const footerLinks = [
    { label: { es: "Solución", en: "Solution" }, href: "#solucion" },
    { label: { es: "Casos de uso", en: "Use Cases" }, href: "#casos" },
    { label: { es: "Cómo funciona", en: "How It Works" }, href: "#como-funciona" },
    { label: { es: "Empresa", en: "Company" }, href: "#empresa" },
    { label: { es: "Contacto", en: "Contact" }, href: "#contacto" },
  ]

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
              {lang === "es" ? link.label.es : link.label.en}
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
