import { getCities } from '@/actions/cities'
import { AppHeader } from '@/components/admin/app-header'
import { AppSidebar } from '@/components/admin/app-sidebar'
import { CityRow } from '@/components/admin/city-row-mobile'
import { CreateCityDrawer } from '@/components/admin/create-city-drawer'
import { SearchIcon } from 'lucide-react'

export default async function CitiesPage() {
  const cities = await getCities()

  return (
    <>
      <AppSidebar />
      <AppHeader className='fixed top-0 left-0 right-0 lg:hidden flex items-center justify-between p-0 px-6 py-4 bg-white'>
        <CreateCityDrawer />
      </AppHeader>
      <div className='lg:hidden flex h-full flex-1 flex-col p-4 bg-slate-200/90 overflow-y-auto pt-22 pb-26'>
        <div className='flex items-center px-2.5 py-2 bg-slate-300 rounded-xl w-full mt-2 mb-5'>
          <SearchIcon className='size-5 text-slate-500' />
          <input
            type='text'
            placeholder='Search cities...'
            className='w-full bg-transparent text-slate-800 placeholder-slate-400 ml-2 outline-none'
          />
        </div>
        {cities.map(city => (
          <CityRow
            key={city.id}
            city={city}
          />
        ))}
      </div>
      <div className='hidden lg:flex flex-col px-8'>Desktop</div>
    </>
  )
}
