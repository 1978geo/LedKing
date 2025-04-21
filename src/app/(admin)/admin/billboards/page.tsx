import { getBillboards } from '@/actions/billboards'
import { requireAuth } from '@/lib/require-auth.server'
import { BillboardsTable } from './_components/billboards-table'

export default async function BillbaordsPage() {
  await requireAuth()
  const billboards = await getBillboards()

  return <BillboardsTable data={billboards} />
}
