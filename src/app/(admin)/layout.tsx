import type { Metadata } from 'next'
import { Play } from 'next/font/google'
import { DrawerCSSProvider } from '@/providers/drawer-css-provider'
import { AppHeader } from '@/components/admin/app-header'
import { Toaster } from '@/components/ui/sonner'
import '../globals.css'
import { AppSidebar } from '@/components/admin/app-sidebar'

const playSans = Play({
  variable: '--font-play-sans',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'LedKing',
  description: 'Your one-stop shop for all things LED',
  manifest: '/site.webmanifest',
}

export default function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <DrawerCSSProvider>
        <div className='flex flex-col lg:flex-row w-full h-screen'>
          <AppHeader />
          <AppSidebar />
          <main className='lg:pt-0 flex flex-col lg:flex-row lg:w-full flex-1 overflow-y-auto bg-slate-200'>
            {children}
          </main>
        </div>
      </DrawerCSSProvider>
      <Toaster />
    </>
  )
}
