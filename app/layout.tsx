import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Nextech Global SAS — Gestión de operaciones empresariales',
  description: 'Centraliza proveedores, equipos y procesos en un solo lugar. Reduce el trabajo manual y gestiona tus pagos con control.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Nextech Global SAS — Gestión de operaciones empresariales',
    description: 'Centraliza proveedores, equipos y procesos en un solo lugar. Reduce el trabajo manual y gestiona tus pagos con control.',
    url: 'https://nodonext.com',
    siteName: 'NODONEXT',
    images: [
      {
        url: 'https://nodonext.com/images/dashboard-imac.jpg',
        width: 1200,
        height: 630,
        alt: 'NODONEXT — Gestión de operaciones empresariales',
      },
    ],
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nextech Global SAS — Gestión de operaciones empresariales',
    description: 'Centraliza proveedores, equipos y procesos en un solo lugar.',
    images: ['https://nodonext.com/images/dashboard-imac.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
