import { AppHeader } from '@/components/admin/app-header'
import { AppSidebar } from '@/components/admin/app-sidebar'

// export default function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <div className='flex w-full h-screen overflow-hidden'>
//       <AppSidebar />
//       <main className='flex flex-col flex-1 shrink-0'>
//         <AppHeader />
//         {children}
//       </main>
//     </div>
//   )
// }

import type { Metadata } from 'next'
import { Play } from 'next/font/google'
import '../globals.css'

const playSans = Play({
  variable: '--font-play-sans',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'LedKing',
  description: 'Your one-stop shop for all things LED',
}

export default function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${playSans.variable} antialiased bg-site-bg`}>
        <div className='flex w-full h-screen overflow-hidden'>
          <AppSidebar />
          <main className='flex flex-col flex-1 shrink-0'>
            <AppHeader />
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
