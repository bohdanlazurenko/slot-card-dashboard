import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Slot Card Dashboard',
  description: 'A modern dashboard built with Next.js, TypeScript, and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}