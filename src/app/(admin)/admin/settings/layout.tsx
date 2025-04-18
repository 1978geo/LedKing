import { PageTitle } from '@/components/admin/page-title'
import { SettingsNav } from '@/components/admin/settings-nav'

export default function SettingsPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col w-full'>
      <PageTitle title='Settings' />

      <div className='flex w-full bg-white border border-border rounded-xl py-8 px-4 mt-6'>
        <SettingsNav />
        <div className='flex flex-col w-full py-4 px-6'>{children}</div>
      </div>
    </div>
  )
}
