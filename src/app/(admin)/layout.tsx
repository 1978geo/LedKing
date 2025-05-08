import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'
import { cn } from '@/lib/utils'
import { AppHeader } from '@/components/admin/app-header'
import { AppSidebar } from '@/components/admin/app-sidebar'
import { ConfirmModalProvider } from '@/components/admin/confirm-modal/context'
import '../globals.css'

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
      <ConfirmModalProvider>
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
      </ConfirmModalProvider>
    </SessionProvider>
  )
}
