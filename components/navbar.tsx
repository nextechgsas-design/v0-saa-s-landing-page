"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Solución", href: "#solucion" },
  { label: "Casos de uso", href: "#casos" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Empresa", href: "#empresa" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

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

        {/* CTA */}
        <a
          href="#contacto"
          className="hidden md:inline-flex items-center bg-foreground text-background text-sm font-medium px-5 py-2.5 rounded-full hover:opacity-80 transition-opacity"
        >
          Solicitar acceso
        </a>

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
            Solicitar acceso
          </a>
        </div>
      )}
    </header>
  )
}
