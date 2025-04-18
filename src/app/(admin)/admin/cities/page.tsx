import { getCities } from '@/actions/cities'
import { DataTable } from '@/components/data-table'
import { requireAuth } from '@/lib/require-auth.server'
import { columns } from './columns'
import { PageTitle } from '@/components/admin/page-title'

export default async function CitiesPage() {
  await requireAuth()
  const cities = await getCities()

  return (
    <div className='flex flex-col w-full gap-y-6'>
      <PageTitle
        title='Cities'
        subtitle='Manage cities for your billboard locations'
      />
      <div className='p-4 bg-white rounded-xl border border-border'>
        <DataTable
          data={cities}
          columns={columns}
          searchKey='name'
        />
      </div>
    </div>
  )
}
