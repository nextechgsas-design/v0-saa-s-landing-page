"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function DashboardMockup() {
  const { lang } = useLanguage()

  const rows = [
    {
      proveedor: "Hotel",
      valor: "800",
      estado: { es: "Pendiente", en: "Pending" },
    },
    {
      proveedor: { es: "Transporte", en: "Transport" },
      valor: "200",
      estado: { es: "Programado", en: "Scheduled" },
    },
    {
      proveedor: { es: "Guía", en: "Guide" },
      valor: "150",
      estado: { es: "Pagado", en: "Paid" },
    },
  ]

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
        {/* Header bar */}
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-muted-foreground/20" />
              <span className="w-3 h-3 rounded-full bg-muted-foreground/20" />
              <span className="w-3 h-3 rounded-full bg-muted-foreground/20" />
            </div>
            <span className="text-xs font-medium text-muted-foreground ml-2">
              {lang === "es" ? "Proyecto: Ejemplo" : "Project: Example"}
            </span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">
                  {lang === "es" ? "Proveedor" : "Vendor"}
                </th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">
                  {lang === "es" ? "Valor" : "Value"}
                </th>
                <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">
                  {lang === "es" ? "Estado" : "Status"}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors"
                >
                  <td className="px-5 py-3 text-foreground font-medium">
                    {typeof row.proveedor === "string"
                      ? row.proveedor
                      : lang === "es"
                        ? row.proveedor.es
                        : row.proveedor.en}
                  </td>
                  <td className="px-5 py-3 text-foreground">{row.valor}</td>
                  <td className="px-5 py-3">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        row.estado.es === "Pagado"
                          ? "bg-foreground text-background"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {lang === "es" ? row.estado.es : row.estado.en}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Abstract image */}
      <div className="relative rounded-xl overflow-hidden border border-border h-32">
        <Image
          src="/abstract-flow.jpg"
          alt={lang === "es" ? "Flujo de operaciones" : "Operations flow"}
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
