export function DashboardMockup() {
  const rows = [
    { proveedor: "Hotel Caribe", valor: "$2.000", estado: "Pendiente" },
    { proveedor: "Transporte Sur", valor: "$800", estado: "Pagado" },
    { proveedor: "Guía Turístico", valor: "$450", estado: "Pendiente" },
    { proveedor: "Catering S.A.", valor: "$1.200", estado: "Pagado" },
  ]

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
      {/* Header bar */}
      <div className="px-5 py-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-muted-foreground/20" />
            <span className="w-3 h-3 rounded-full bg-muted-foreground/20" />
            <span className="w-3 h-3 rounded-full bg-muted-foreground/20" />
          </div>
          <span className="text-xs font-medium text-muted-foreground ml-2">Proyecto: Gira Europa 2025</span>
        </div>
        <span className="text-xs text-muted-foreground">4 proveedores</span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 border-b border-border">
        {[
          { label: "Total", value: "$4.450" },
          { label: "Pagado", value: "$2.000" },
          { label: "Pendiente", value: "$2.450" },
        ].map((stat) => (
          <div key={stat.label} className="px-5 py-4 border-r border-border last:border-r-0">
            <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
            <p className="text-sm font-semibold text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">Proveedor</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">Valor</th>
              <th className="text-left px-5 py-3 text-xs font-medium text-muted-foreground">Estado</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-border last:border-b-0 hover:bg-muted/50 transition-colors">
                <td className="px-5 py-3 text-foreground font-medium">{row.proveedor}</td>
                <td className="px-5 py-3 text-foreground">{row.valor}</td>
                <td className="px-5 py-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      row.estado === "Pagado"
                        ? "bg-foreground text-background"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {row.estado}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer bar */}
      <div className="px-5 py-3 flex items-center justify-between bg-muted/30">
        <span className="text-xs text-muted-foreground">Última actualización: hace 2 min</span>
        <button className="text-xs font-medium text-foreground hover:underline">Ver todo</button>
      </div>
    </div>
  )
}
