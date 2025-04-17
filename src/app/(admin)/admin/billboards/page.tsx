import { getBillboards } from '@/actions/billboards'
import { DataTable } from '@/components/data-table'
import { requireAuth } from '@/lib/require-auth.server'
import { columns } from './columns'

export default async function BillbaordsPage() {
  await requireAuth()
  const billboards = await getBillboards()

  console.log(billboards)

  return (
    <div className='p-4 bg-white rounded-xl border border-border shadow-sm'>
      <DataTable
        data={billboards}
        columns={columns}
        searchKey='city.name'
      />
    </div>
  )
}
