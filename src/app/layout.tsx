import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import SearchNav from '@/components/searchNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Books',
  description: 'La red social de lectores.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <SearchNav />
        <main className="py-14 px-4">
          {children}
        </main>
        <Navbar />
      </body>
    </html>
  )
}
