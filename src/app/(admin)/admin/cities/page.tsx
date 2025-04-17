import { getCities } from '@/actions/cities'
import { DataTable } from '@/components/data-table'
import { requireAuth } from '@/lib/require-auth.server'
import { columns } from './columns'

export default async function CitiesPage() {
  await requireAuth()
  const cities = await getCities()

  return (
    <div className='p-4 bg-white rounded-xl border border-border shadow-sm'>
      <DataTable
        data={cities}
        columns={columns}
        searchKey='name'
      />
    </div>
  )
}
