import { getCities } from '@/actions/cities'
import { AppHeader } from '@/components/admin/app-header'
import { CityRow } from '@/components/admin/city-row-mobile'
import { CreateCityDrawer } from '@/components/admin/create-city-drawer'

export default async function CitiesPage() {
  const cities = await getCities()

  return (
    <>
      <AppHeader className='lg:hidden flex items-center justify-between p-0 px-6 py-4 bg-white/60 backdrop-blur-md'>
        <CreateCityDrawer />
      </AppHeader>
      <div className='lg:hidden flex h-full flex-1 flex-col p-4 bg-slate-200/90 overflow-y-auto pb-26'>
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
