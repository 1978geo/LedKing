import { getBillboards } from '@/actions/billboards'

export default async function BillbaordsPage() {
  const billboards = await getBillboards()

  console.log(billboards)

  return <div>Billbaords</div>
}
