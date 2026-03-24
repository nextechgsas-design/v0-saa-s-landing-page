"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ContactSection() {
  const { lang } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ nombre: "", email: "", empresa: "", mensaje: "" })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      setSubmitted(true)
    } catch {
      // Still show success for now
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
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
              {lang === "es" ? "Contacto" : "Contact"}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-balance mb-6">
              {lang === "es"
                ? "¿Listo para organizar tu operación?"
                : "Ready to organize your operation?"}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              {lang === "es"
                ? "Solicita acceso a NODOTECH y un integrante de nuestro equipo se contactará contigo para conocer tu operación."
                : "Request access to NODOTECH and a team member will contact you to learn about your operation."}
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
                <h3 className="font-semibold text-foreground text-lg">
                  {lang === "es" ? "Solicitud enviada" : "Request Sent"}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {lang === "es"
                    ? "Gracias por tu interés. Nos pondremos en contacto pronto."
                    : "Thank you for your interest. We will contact you soon."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="nombre" className="text-xs font-medium text-foreground">
                      {lang === "es" ? "Nombre" : "Name"}
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      placeholder={lang === "es" ? "Tu nombre" : "Your name"}
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
                      placeholder={lang === "es" ? "tu@empresa.com" : "you@company.com"}
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="empresa" className="text-xs font-medium text-foreground">
                    {lang === "es" ? "Empresa" : "Company"}
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    required
                    placeholder={lang === "es" ? "Nombre de tu empresa" : "Your company name"}
                    value={form.empresa}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="mensaje" className="text-xs font-medium text-foreground">
                    {lang === "es" ? "Mensaje" : "Message"}
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder={
                      lang === "es"
                        ? "Cuéntanos sobre tu operación..."
                        : "Tell us about your operation..."
                    }
                    value={form.mensaje}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-foreground text-background font-medium text-sm px-6 py-3.5 rounded-full hover:opacity-80 transition-opacity mt-2 disabled:opacity-50"
                >
                  {loading
                    ? lang === "es"
                      ? "Enviando..."
                      : "Sending..."
                    : lang === "es"
                      ? "Solicitar demo"
                      : "Request Demo"}
                  {!loading && <ArrowRight size={15} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
