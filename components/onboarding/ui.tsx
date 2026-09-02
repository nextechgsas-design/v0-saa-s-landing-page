"use client"

import { useRef, useState } from "react"

export function FormField({
  label,
  required = false,
  children,
  hint,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
  hint?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-white/70 font-medium">
        {label}
        {required && <span className="text-white/40 ml-1">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-white/30">{hint}</p>}
    </div>
  )
}

export function TextInput({
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  placeholder?: string
  value: string
  onChange: (v: string) => void
  type?: string
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/30 transition-colors"
    />
  )
}

export function TextArea({
  placeholder,
  value,
  onChange,
}: {
  placeholder?: string
  value: string
  onChange: (v: string) => void
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={3}
      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/30 transition-colors resize-none"
    />
  )
}

export function SelectInput({
  options,
  value,
  onChange,
  placeholder,
}: {
  options: string[]
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition-colors appearance-none cursor-pointer"
      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' fill='none' stroke='%23ffffff60' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
    >
      {placeholder && <option value="" disabled>{placeholder}</option>}
      {options.map((o) => (
        <option key={o} value={o} className="bg-zinc-900 text-white">{o}</option>
      ))}
    </select>
  )
}

export function RadioGroup({
  options,
  value,
  onChange,
}: {
  options: string[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="flex gap-3">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          className={`flex-1 py-3 rounded-lg text-sm font-medium border transition-all ${
            value === o
              ? "bg-white text-black border-white"
              : "bg-white/5 text-white/60 border-white/10 hover:border-white/25"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  )
}

export function FileUpload({
  label,
  fileKey,
  file,
  onChange,
  required = true,
}: {
  label: string
  fileKey: string
  file: File | null
  onChange: (key: string, file: File | null) => void
  required?: boolean
}) {
  const ref = useRef<HTMLInputElement>(null)
  const [dragging, setDragging] = useState(false)

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragging(false)
    const f = e.dataTransfer.files[0]
    if (f) onChange(fileKey, f)
  }

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-white/70 font-medium">
        {label}
        {required && <span className="text-white/40 ml-1">*</span>}
      </label>
      <div
        onClick={() => ref.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={`relative border rounded-lg px-4 py-4 cursor-pointer transition-all flex items-center gap-3 ${
          dragging
            ? "border-white/40 bg-white/10"
            : file
            ? "border-white/20 bg-white/5"
            : "border-white/10 border-dashed bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
        }`}
      >
        <div className={`w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 ${file ? "bg-white/10" : "bg-white/5"}`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            {file ? (
              <path d="M3 2h7l3 3v9H3V2z M10 2v3h3" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            ) : (
              <path d="M8 11V5M5 8l3-3 3 3M3 14h10" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            )}
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          {file ? (
            <>
              <p className="text-sm text-white truncate">{file.name}</p>
              <p className="text-xs text-white/30">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
            </>
          ) : (
            <p className="text-sm text-white/30">Suelta el archivo aquí o <span className="text-white/50 underline underline-offset-2">selecciona</span></p>
          )}
        </div>
        {file && (
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onChange(fileKey, null) }}
            className="text-white/30 hover:text-white/60 transition-colors text-lg leading-none"
          >×</button>
        )}
        <input ref={ref} type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={(e) => onChange(fileKey, e.target.files?.[0] ?? null)} />
      </div>
    </div>
  )
}

export function SectionDivider({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-4 pt-2">
      <div className="h-px flex-1 bg-white/8" />
      <span className="text-xs text-white/30 uppercase tracking-widest font-medium">{title}</span>
      <div className="h-px flex-1 bg-white/8" />
    </div>
  )
}

export function SubmitButton({ loading, label = "Enviar formulario" }: { loading: boolean; label?: string }) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full py-4 rounded-xl bg-white text-black text-sm font-semibold tracking-wide hover:bg-white/90 active:scale-[0.99] transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      {loading ? (
        <>
          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="40" strokeDashoffset="10"/>
          </svg>
          Enviando...
        </>
      ) : label}
    </button>
  )
}

export function OnboardingLayout({
  title,
  subtitle,
  badge,
  children,
}: {
  title: string
  subtitle: string
  badge: string
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Nav */}
      <nav className="border-b border-white/8 px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-sm font-semibold tracking-tight text-white">NODONEXT</a>
        <span className="text-xs text-white/30">NEXTECH GLOBAL SAS</span>
      </nav>

      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10">
          <span className="inline-block text-xs text-white/40 uppercase tracking-widest border border-white/10 rounded-full px-3 py-1 mb-4">{badge}</span>
          <h1 className="text-3xl font-bold tracking-tight mb-3">{title}</h1>
          <p className="text-white/50 text-sm leading-relaxed">{subtitle}</p>
        </div>

        {children}

        {/* Footer */}
        <p className="text-center text-xs text-white/20 mt-10">
          © {new Date().getFullYear()} NEXTECH GLOBAL SAS · La información suministrada es tratada de forma confidencial.
        </p>
      </div>
    </div>
  )
}
