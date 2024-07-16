import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserratFont = Montserrat({ weight: ['400', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tech Next Solutions - Leading IT Solutions and Services Provider',
  description: 'Tech Next Solutions ofrece servicios de IT de primer nivel, incluyendo desarrollo de software, aplicaciones web, infraestructura de redes y ciberseguridad. ¡Mejora tu negocio con nuestras soluciones innovadoras!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={montserratFont.className}>{children}</body>
    </html>
  )
}
