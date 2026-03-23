import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, email, empresa, mensaje } = body

    // Basic validation
    if (!nombre || !email || !empresa) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Log the submission (in production, you would save to a database or send an email)
    console.log("Contact form submission:", {
      nombre,
      email,
      empresa,
      mensaje,
      timestamp: new Date().toISOString(),
    })

    // Here you could:
    // - Save to a database
    // - Send an email notification
    // - Integrate with a CRM
    // - Send to a webhook

    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
