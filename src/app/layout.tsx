import type { Metadata } from 'next'
import { Play } from 'next/font/google'
import './globals.css'

const playSans = Play({
  variable: '--font-play-sans',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'LedKing',
  description: 'Your one-stop shop for all things LED',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${playSans.variable} antialiased bg-site-bg`}>
        {children}
      </body>
    </html>
  )
}
