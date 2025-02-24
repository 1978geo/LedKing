import { AppHeader } from '@/components/admin/app-header'
import { AppSidebar } from '@/components/admin/app-sidebar'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex w-full h-screen overflow-hidden'>
      <AppSidebar />
      <main className='flex flex-col flex-1 shrink-0'>
        <AppHeader />
        {children}
      </main>
    </div>
  )
}
