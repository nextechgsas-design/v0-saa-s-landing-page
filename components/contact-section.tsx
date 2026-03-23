"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ nombre: "", email: "", empresa: "", mensaje: "" })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass =
    "w-full border border-border bg-background text-foreground placeholder:text-muted-foreground rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 transition"

  return (
    <section id="contacto" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Contacto
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance mb-6">
              ¿Listo para organizar tu operación?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              Solicita acceso a NEXTECH y un integrante de nuestro equipo se contactará
              contigo para conocer tu operación.
            </p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <span>nextech@example.com</span>
              <span>Colombia — NEXTECH GLOBAL SAS</span>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="border border-border rounded-2xl p-10 text-center flex flex-col gap-3 items-center justify-center min-h-64">
                <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center mb-2">
                  <ArrowRight size={16} className="text-background" />
                </div>
                <h3 className="font-semibold text-foreground text-lg">Solicitud enviada</h3>
                <p className="text-muted-foreground text-sm">
                  Gracias por tu interés. Nos pondremos en contacto pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nombre" className="text-xs font-medium text-foreground">
                      Nombre
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="tu@empresa.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="empresa" className="text-xs font-medium text-foreground">
                    Empresa
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    required
                    placeholder="Nombre de tu empresa"
                    value={form.empresa}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="mensaje" className="text-xs font-medium text-foreground">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="Cuéntanos sobre tu operación..."
                    value={form.mensaje}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-background font-medium text-sm px-6 py-3.5 rounded-full hover:opacity-80 transition-opacity mt-2"
                >
                  Solicitar acceso
                  <ArrowRight size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
