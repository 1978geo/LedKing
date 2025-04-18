import { PageTitle } from '@/components/admin/page-title'

export default function DashboardPage() {
  return (
    <div className='flex flex-col w-full'>
      <PageTitle
        title='Dashboard'
        subtitle='Overview of admin activities'
      />

      <div className='flex w-full bg-white border border-border rounded-xl p-4 mt-6'>
        Dashboard
      </div>
    </div>
  )
}
