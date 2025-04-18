import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'
import { AppHeader } from '@/components/admin/app-header'
import { Toaster } from '@/components/ui/sonner'
import { AppSidebar } from '@/components/admin/app-sidebar'
import '../globals.css'
import { cn } from '@/lib/utils'

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
    <SessionProvider>
      <div
        className={cn(
          'flex flex-row max-h-screen w-full overflow-hidden',
          'admin',
        )}
      >
        <AppSidebar />
        <div className='flex flex-col w-full flex-1 overflow-hidden'>
          <AppHeader />
          <main className='flex flex-col flex-1 overflow-y-auto bg-gray-100 p-6'>
            {children}
          </main>
        </div>
      </div>
      <Toaster />
    </SessionProvider>
  )
}
