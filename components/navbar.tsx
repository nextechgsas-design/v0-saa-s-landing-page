"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { lang, setLang } = useLanguage()

  const navLinks = [
    { label: lang === "es" ? "Solución" : "Solution", href: "#solucion" },
    { label: lang === "es" ? "Casos de uso" : "Use Cases", href: "#casos" },
    { label: lang === "es" ? "Cómo funciona" : "How It Works", href: "#como-funciona" },
    { label: lang === "es" ? "Empresa" : "Company", href: "#empresa" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-foreground font-semibold text-lg tracking-tight">
          NEXTECH
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: Lang switcher + CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language switcher */}
          <div className="flex items-center border border-border rounded-full overflow-hidden text-xs font-medium">
            <button
              onClick={() => setLang("es")}
              className={`px-3 py-1.5 transition-colors ${
                lang === "es"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 transition-colors ${
                lang === "en"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA */}
          <a
            href="#contacto"
            className="inline-flex items-center bg-foreground text-background text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-80 transition-opacity"
          >
            {lang === "es" ? "Solicitar demo" : "Request Demo"}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
          {/* Mobile lang switcher */}
          <div className="flex items-center gap-2 pb-2 border-b border-border mb-2">
            <button
              onClick={() => setLang("es")}
              className={`text-sm font-medium ${
                lang === "es" ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              ES
            </button>
            <span className="text-muted-foreground">|</span>
            <button
              onClick={() => setLang("en")}
              className={`text-sm font-medium ${
                lang === "en" ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              EN
            </button>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="inline-flex items-center justify-center bg-foreground text-background text-sm font-medium px-5 py-2.5 rounded-full mt-2"
            onClick={() => setOpen(false)}
          >
            {lang === "es" ? "Solicitar demo" : "Request Demo"}
          </a>
        </div>
      )}
    </header>
  )
}
