import { getCities } from '@/actions/cities'
import { requireAuth } from '@/lib/require-auth.server'
import { PageTitle } from '@/components/admin/page-title'
import { CitiesTable } from './_components/cities-table'

export default async function CitiesPage() {
  await requireAuth()
  const cities = await getCities()

  return (
    <div className='flex flex-col w-full gap-y-6'>
      <PageTitle
        title='Cities'
        subtitle='Manage cities for your billboard locations'
      />
      <CitiesTable data={cities} />
    </div>
  )
}
