import './globals.css'
import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { ShoppingCart } from '@/components/ShoppingCart'
import { Toast } from '@/components/Fragments/Toast'

const oswald = Oswald({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Fashion Store',
  description: 'Fashion website selling the trendiest outfits',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        {children}
        <Footer />
        <ShoppingCart />
        <Toast />
      </body>
    </html>
  )
}