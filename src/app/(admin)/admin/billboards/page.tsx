import { getBillboards } from '@/actions/billboards'
import { requireAuth } from '@/lib/require-auth.server'
import { BillboardsTable } from './_components/billboards-table'
import { getCitiesList } from '@/actions/cities'

export default async function BillbaordsPage() {
  await requireAuth()
  const billboards = await getBillboards()
  const cities = await getCitiesList()

  return (
    <BillboardsTable
      data={billboards}
      cities={cities}
    />
  )
}
