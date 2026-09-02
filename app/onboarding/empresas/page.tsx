"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import {
  OnboardingLayout,
  FormField,
  TextInput,
  TextArea,
  RadioGroup,
  FileUpload,
  SectionDivider,
  SubmitButton,
} from "@/components/onboarding/ui"

type Files = {
  camara_comercio: File | null
  rut: File | null
  rub: File | null
  declaracion_origen_fondos: File | null
  identidad_accionistas: File | null
  identidad_representantes: File | null
  manual_sagrilaft: File | null
  estados_financieros: File | null
  declaracion_renta: File | null
}

export default function OnboardingEmpresas() {
  const [form, setForm] = useState({
    razon_social: "",
    nit: "",
    correo: "",
    telefono: "",
    descripcion_negocio: "",
    valor_promedio_usd: "",
    frecuencia_operaciones: "",
    representante_legal: "",
    origen_fondos: "",
    pais_origen_recursos: "",
    tiene_oficial_cumplimiento: "",
    tiene_pep: "",
    url_web: "",
    inscrito_uiaf: "",
    direccion_billetera: "",
    acepta_declaracion: false,
  })

  const [files, setFiles] = useState<Files>({
    camara_comercio: null,
    rut: null,
    rub: null,
    declaracion_origen_fondos: null,
    identidad_accionistas: null,
    identidad_representantes: null,
    manual_sagrilaft: null,
    estados_financieros: null,
    declaracion_renta: null,
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
      "camara_comercio", "rut", "rub", "declaracion_origen_fondos",
      "identidad_accionistas", "identidad_representantes",
      "estados_financieros", "declaracion_renta"
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
      const prefix = `empresas/${id}`

      const uploads = await Promise.all([
        uploadFile(files.camara_comercio!, `${prefix}/camara_comercio.pdf`),
        uploadFile(files.rut!, `${prefix}/rut.pdf`),
        uploadFile(files.rub!, `${prefix}/rub.pdf`),
        uploadFile(files.declaracion_origen_fondos!, `${prefix}/declaracion_origen_fondos.pdf`),
        uploadFile(files.identidad_accionistas!, `${prefix}/identidad_accionistas.pdf`),
        uploadFile(files.identidad_representantes!, `${prefix}/identidad_representantes.pdf`),
        files.manual_sagrilaft ? uploadFile(files.manual_sagrilaft, `${prefix}/manual_sagrilaft.pdf`) : Promise.resolve(null),
        uploadFile(files.estados_financieros!, `${prefix}/estados_financieros.pdf`),
        uploadFile(files.declaracion_renta!, `${prefix}/declaracion_renta.pdf`),
      ])

      const { error: dbError } = await supabase
        .from("onboarding_empresas")
        .insert({
          ...form,
          archivo_camara_comercio: uploads[0],
          archivo_rut: uploads[1],
          archivo_rub: uploads[2],
          archivo_declaracion_origen_fondos: uploads[3],
          archivo_identidad_accionistas: uploads[4],
          archivo_identidad_representantes: uploads[5],
          archivo_manual_sagrilaft: uploads[6],
          archivo_estados_financieros: uploads[7],
          archivo_declaracion_renta: uploads[8],
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
            Un integrante del equipo de NEXTECH GLOBAL SAS revisará la información de tu empresa y se pondrá en contacto contigo pronto.
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
      badge="Empresas"
      title="Onboarding Empresas"
      subtitle="Completa este formulario para el registro y verificación de tu empresa en NEXTECH GLOBAL SAS. Todos los campos marcados con * son obligatorios."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">

        <SectionDivider title="Datos de la empresa" />

        <FormField label="Razón Social" required>
          <TextInput value={form.razon_social} onChange={setField("razon_social")} placeholder="Nombre legal de la empresa" />
        </FormField>

        <FormField label="NIT" required>
          <TextInput value={form.nit} onChange={setField("nit")} placeholder="Ej. 900.123.456-7" />
        </FormField>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FormField label="Correo electrónico" required>
            <TextInput type="email" value={form.correo} onChange={setField("correo")} placeholder="correo@empresa.com" />
          </FormField>
          <FormField label="Número de teléfono" required>
            <TextInput type="tel" value={form.telefono} onChange={setField("telefono")} placeholder="+57 300 000 0000" />
          </FormField>
        </div>

        <SectionDivider title="Información operacional" />

        <FormField label="1. Descripción del negocio" required hint="Escriba en dos líneas una breve descripción.">
          <TextArea value={form.descripcion_negocio} onChange={setField("descripcion_negocio")} placeholder="Breve descripción de la actividad económica..." />
        </FormField>

        <FormField label="2. Valor promedio por día en USD de las transacciones" required>
          <TextInput value={form.valor_promedio_usd} onChange={setField("valor_promedio_usd")} placeholder="Ej. $10,000 USD diarios" />
        </FormField>

        <FormField label="3. Frecuencia con la que desea realizar operaciones" required>
          <TextInput value={form.frecuencia_operaciones} onChange={setField("frecuencia_operaciones")} placeholder="Ej. Diaria, semanal, mensual..." />
        </FormField>

        <FormField label="4. Nombre, teléfono y correo del representante legal" required>
          <TextArea value={form.representante_legal} onChange={setField("representante_legal")} placeholder="Nombre: ...\nTeléfono: ...\nCorreo: ..." />
        </FormField>

        <FormField label="5. Origen de los fondos que utilizará para las operaciones" required>
          <TextArea value={form.origen_fondos} onChange={setField("origen_fondos")} placeholder="Describa el origen de los fondos..." />
        </FormField>

        <FormField label="6. País de origen de los recursos" required>
          <TextInput value={form.pais_origen_recursos} onChange={setField("pais_origen_recursos")} placeholder="Ej. Colombia" />
        </FormField>

        <FormField label="7. ¿Cuenta actualmente con un oficial de cumplimiento?" required>
          <RadioGroup options={["Sí", "No"]} value={form.tiene_oficial_cumplimiento} onChange={setField("tiene_oficial_cumplimiento")} />
        </FormField>

        <FormField label="8. ¿Alguno de los socios o colaboradores es una persona políticamente expuesta (PEP)?" required>
          <RadioGroup options={["Sí", "No"]} value={form.tiene_pep} onChange={setField("tiene_pep")} />
        </FormField>

        <FormField label="9. URL de la página web" hint="Opcional">
          <TextInput value={form.url_web} onChange={setField("url_web")} placeholder="https://www.empresa.com" />
        </FormField>

        <FormField label="10. ¿Se encuentran inscritos ante la UIAF y presentan reportes de sus operaciones?" required>
          <RadioGroup options={["Sí", "No"]} value={form.inscrito_uiaf} onChange={setField("inscrito_uiaf")} />
        </FormField>

        <FormField label="11. Dirección de billetera y red que usará para enviar los fondos" required>
          <TextInput value={form.direccion_billetera} onChange={setField("direccion_billetera")} placeholder="Ej. 0x1234...abcd (Red: Ethereum)" />
        </FormField>

        <SectionDivider title="Documentos requeridos" />

        <FileUpload label="1. Certificado de Cámara de Comercio — expedido en los últimos 30 días (PDF)" fileKey="camara_comercio" file={files.camara_comercio} onChange={setFile} />
        <FileUpload label="2. RUT — Registro Único Tributario (PDF)" fileKey="rut" file={files.rut} onChange={setFile} />
        <FileUpload label="3. RUB — Registro Único de Beneficiarios Finales (PDF)" fileKey="rub" file={files.rub} onChange={setFile} />
        <FileUpload label="4. Declaración de Origen de Fondos firmada (PDF)" fileKey="declaracion_origen_fondos" file={files.declaracion_origen_fondos} onChange={setFile} />

        <div className="bg-white/[0.02] border border-white/8 rounded-xl p-4 flex flex-col gap-4">
          <p className="text-xs text-white/30 uppercase tracking-widest font-medium">5. Documentos de identidad</p>
          <FileUpload
            label="5.1 Documento de identidad de los accionistas (si es más de uno, incluir en un solo PDF)"
            fileKey="identidad_accionistas"
            file={files.identidad_accionistas}
            onChange={setFile}
          />
          <FileUpload
            label="5.2 Documento de identidad de los representantes legales (si es más de uno, incluir en un solo PDF)"
            fileKey="identidad_representantes"
            file={files.identidad_representantes}
            onChange={setFile}
          />
        </div>

        <FileUpload label="6. Manual SAGRILAFT o certificación de cumplimiento (PDF)" fileKey="manual_sagrilaft" file={files.manual_sagrilaft} onChange={setFile} required={false} />
        <FileUpload label="7. Estados financieros al corte del último periodo fiscal con notas (PDF)" fileKey="estados_financieros" file={files.estados_financieros} onChange={setFile} />
        <FileUpload label="8. Última declaración de renta (PDF)" fileKey="declaracion_renta" file={files.declaracion_renta} onChange={setFile} />

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
