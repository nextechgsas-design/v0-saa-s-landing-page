"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import {
  OnboardingLayout,
  FormField,
  TextInput,
  TextArea,
  SelectInput,
  FileUpload,
  SectionDivider,
  SubmitButton,
} from "@/components/onboarding/ui"

const TIPOS_DOC = [
  "Cédula de ciudadanía",
  "Pasaporte",
  "Cédula de extranjería",
  "Permiso Especial de Permanencia (PEP)",
  "Permiso por Protección Temporal (PPT)",
]

type Files = {
  rut: File | null
  cedula: File | null
  declaracion_renta: File | null
  estados_financieros: File | null
  declaracion_origen_fondos: File | null
}

export default function OnboardingPersonaNatural() {
  const [form, setForm] = useState({
    nombre_completo: "",
    tipo_documento: "",
    numero_documento: "",
    correo: "",
    telefono: "",
    descripcion_negocio: "",
    valor_promedio_usd: "",
    frecuencia_operaciones: "",
    origen_fondos: "",
    pais_origen_recursos: "",
    acepta_declaracion: false,
  })

  const [files, setFiles] = useState<Files>({
    rut: null,
    cedula: null,
    declaracion_renta: null,
    estados_financieros: null,
    declaracion_origen_fondos: null,
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const setField = (key: string) => (value: string) =>
    setForm((f) => ({ ...f, [key]: value }))

  const setFile = (key: string, file: File | null) =>
    setFiles((f) => ({ ...f, [key]: file }))

  const uploadFile = async (file: File, path: string) => {
    const { data, error } = await supabase.storage
      .from("onboarding-docs")
      .upload(path, file, { upsert: true })
    if (error) throw error
    return data.path
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!form.acepta_declaracion) {
      setError("Debes aceptar la declaración para continuar.")
      return
    }

    const requiredFiles: (keyof Files)[] = [
      "rut", "cedula", "declaracion_renta",
      "estados_financieros", "declaracion_origen_fondos"
    ]
    for (const key of requiredFiles) {
      if (!files[key]) {
        setError(`Por favor adjunta el documento: ${key.replace(/_/g, " ")}`)
        return
      }
    }

    setLoading(true)
    try {
      const id = crypto.randomUUID()
      const prefix = `persona-natural/${id}`

      const [rutPath, cedulaPath, rentaPath, estadosPath, origenPath] = await Promise.all([
        uploadFile(files.rut!, `${prefix}/rut.pdf`),
        uploadFile(files.cedula!, `${prefix}/cedula.pdf`),
        uploadFile(files.declaracion_renta!, `${prefix}/declaracion_renta.pdf`),
        uploadFile(files.estados_financieros!, `${prefix}/estados_financieros.pdf`),
        uploadFile(files.declaracion_origen_fondos!, `${prefix}/declaracion_origen_fondos.pdf`),
      ])

      const { error: dbError } = await supabase
        .from("onboarding_persona_natural")
        .insert({
          ...form,
          archivo_rut: rutPath,
          archivo_cedula: cedulaPath,
          archivo_declaracion_renta: rentaPath,
          archivo_estados_financieros: estadosPath,
          archivo_declaracion_origen_fondos: origenPath,
        })

      if (dbError) throw dbError
      setSuccess(true)
    } catch (err: any) {
      setError(err.message || "Ocurrió un error. Por favor intenta de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <OnboardingLayout
        badge="Onboarding"
        title="¡Formulario enviado!"
        subtitle=""
      >
        <div className="text-center py-16 flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full border border-white/15 flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M6 14l6 6 10-10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-xl font-semibold">Solicitud recibida</h2>
          <p className="text-white/50 text-sm max-w-sm leading-relaxed">
            Un integrante del equipo de NEXTECH GLOBAL SAS revisará tu información y se pondrá en contacto contigo pronto.
          </p>
          <a href="/" className="mt-4 text-sm text-white/40 underline underline-offset-4 hover:text-white/60 transition-colors">
            Volver al inicio
          </a>
        </div>
      </OnboardingLayout>
    )
  }

  return (
    <OnboardingLayout
      badge="Persona Natural"
      title="Onboarding Persona Natural"
      subtitle="Completa este formulario para tu registro y verificación como persona natural en NEXTECH GLOBAL SAS. Todos los campos marcados con * son obligatorios."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">

        <SectionDivider title="Datos personales" />

        <FormField label="Nombre completo" required>
          <TextInput value={form.nombre_completo} onChange={setField("nombre_completo")} placeholder="Ej. Juan Carlos Pérez" />
        </FormField>

        <FormField label="Tipo de documento" required>
          <SelectInput
            options={TIPOS_DOC}
            value={form.tipo_documento}
            onChange={setField("tipo_documento")}
            placeholder="Selecciona una opción"
          />
        </FormField>

        <FormField label="Número de documento de identidad" required>
          <TextInput value={form.numero_documento} onChange={setField("numero_documento")} placeholder="Ej. 1234567890" />
        </FormField>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField label="Correo electrónico" required>
            <TextInput type="email" value={form.correo} onChange={setField("correo")} placeholder="correo@ejemplo.com" />
          </FormField>
          <FormField label="Número de teléfono" required>
            <TextInput type="tel" value={form.telefono} onChange={setField("telefono")} placeholder="+57 300 000 0000" />
          </FormField>
        </div>

        <SectionDivider title="Información operacional" />

        <FormField label="1. Descripción de su negocio" required hint="Escriba en dos líneas una breve descripción.">
          <TextArea value={form.descripcion_negocio} onChange={setField("descripcion_negocio")} placeholder="Breve descripción de su actividad económica o negocio..." />
        </FormField>

        <FormField label="2. Valor promedio por día en USD de las transacciones" required>
          <TextInput value={form.valor_promedio_usd} onChange={setField("valor_promedio_usd")} placeholder="Ej. $5,000 USD diarios" />
        </FormField>

        <FormField label="3. Frecuencia con la que desea realizar operaciones" required>
          <TextInput value={form.frecuencia_operaciones} onChange={setField("frecuencia_operaciones")} placeholder="Ej. Diaria, semanal, mensual..." />
        </FormField>

        <FormField label="4. Origen de los fondos que utilizará para las operaciones" required>
          <TextArea value={form.origen_fondos} onChange={setField("origen_fondos")} placeholder="Describa el origen de los fondos..." />
        </FormField>

        <FormField label="5. País de origen de los recursos" required>
          <TextInput value={form.pais_origen_recursos} onChange={setField("pais_origen_recursos")} placeholder="Ej. Colombia" />
        </FormField>

        <SectionDivider title="Documentos requeridos" />

        <FileUpload label="1. RUT — Registro Único Tributario actualizado (PDF)" fileKey="rut" file={files.rut} onChange={setFile} />
        <FileUpload label="2. Copia del documento de identidad (PDF)" fileKey="cedula" file={files.cedula} onChange={setFile} />
        <FileUpload label="3. Última declaración de renta (PDF)" fileKey="declaracion_renta" file={files.declaracion_renta} onChange={setFile} />
        <FileUpload label="4. Estados financieros al corte del último periodo fiscal con notas (PDF)" fileKey="estados_financieros" file={files.estados_financieros} onChange={setFile} />
        <FileUpload label="5. Declaración de origen de fondos firmada (PDF)" fileKey="declaracion_origen_fondos" file={files.declaracion_origen_fondos} onChange={setFile} />

        <SectionDivider title="Declaración" />

        <label className="flex gap-3 cursor-pointer group">
          <div className="relative mt-0.5 flex-shrink-0">
            <input
              type="checkbox"
              checked={form.acepta_declaracion}
              onChange={(e) => setForm((f) => ({ ...f, acepta_declaracion: e.target.checked }))}
              className="peer sr-only"
            />
            <div className="w-5 h-5 rounded border border-white/20 bg-white/5 peer-checked:bg-white peer-checked:border-white transition-all flex items-center justify-center">
              {form.acepta_declaracion && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          </div>
          <span className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
            Declaro que la información suministrada y los documentos adjuntos son veraces y se encuentran actualizados, y autorizo su uso por parte de NEXTECH GLOBAL SAS para los procesos de verificación y cumplimiento correspondientes.
          </span>
        </label>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}

        <SubmitButton loading={loading} />
      </form>
    </OnboardingLayout>
  )
}
