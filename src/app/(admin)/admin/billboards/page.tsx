import { getBillboards } from '@/actions/billboards'
import { requireAuth } from '@/lib/require-auth.server'
import { BillboardsTable } from './_components/billboards-table'
import { PageTitle } from '@/components/admin/page-title'

export default async function BillbaordsPage() {
  await requireAuth()
  const billboards = await getBillboards()

  return (
    <div className='flex flex-col w-full gap-y-6'>
      <PageTitle
        title='Billboards'
        subtitle='Manage billboards for your locations'
      />

      <BillboardsTable data={billboards} />
    </div>
  )
}
