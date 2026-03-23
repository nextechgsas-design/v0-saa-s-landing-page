"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { lang } = useLanguage()

  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-widest border border-border rounded-full px-4 py-1.5 w-fit">
            {lang === "es" ? "Plataforma operativa" : "Operations Platform"}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold leading-[1.15] tracking-tight text-foreground text-balance">
            {lang === "es"
              ? "Soluciones tecnológicas para organizar y gestionar operaciones empresariales"
              : "Technology solutions to organize and manage business operations"}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
            {lang === "es"
              ? "Centraliza proveedores, equipos y procesos en un solo lugar. Reduce el trabajo manual y gestiona tus pagos con control."
              : "Centralize vendors, teams, and processes in one place. Reduce manual work and manage your payments with control."}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 bg-foreground text-background font-medium text-sm px-6 py-3 rounded-full hover:opacity-80 transition-opacity"
            >
              {lang === "es" ? "Solicitar demo" : "Request Demo"}
              <ArrowRight size={15} />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-medium text-sm px-6 py-3 rounded-full hover:bg-muted transition-colors"
            >
              {lang === "es" ? "Hablar con nosotros" : "Talk to Us"}
            </a>
          </div>
        </div>

        {/* Images */}
        <div className="hidden lg:block relative h-[380px]">
          {/* iMac — solo imagen */}
          <div className="absolute top-0 left-0 w-full rounded-2xl overflow-hidden shadow-xl border border-border">
            <Image
              src="/images/dashboard-imac.jpg"
              alt={lang === "es" ? "Dashboard de operaciones en iMac" : "Operations dashboard on iMac"}
              width={520}
              height={360}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
