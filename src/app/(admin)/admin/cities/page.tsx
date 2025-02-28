import { getCities } from '@/actions/cities'
import { ChevronRightIcon, MapPinIcon, PlusIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AppHeader } from '@/components/admin/app-header'

export default async function CitiesPage() {
  const cities = await getCities()

  return (
    <>
      <AppHeader className='flex items-center justify-between p-0 px-6 py-4 bg-white/60 backdrop-blur-md'>
        <Button size='icon'>
          <PlusIcon />
        </Button>
      </AppHeader>
      <div className='flex h-full flex-1 flex-col p-4 bg-slate-200/90 overflow-y-auto pb-26'>
        {cities.map(city => (
          <div
            key={city.id}
            className='flex items-center gap-x-3 justify-between bg-white border-b border-border p-4 text-sm text-slate-700 first-of-type:rounded-t-2xl last-of-type:rounded-b-2xl last-of-type:border-b-0'
          >
            <div className='flex-1'>
              <Button size='icon'>
                <MapPinIcon />
              </Button>
            </div>
            <div className='flex-5 font-semibold'>{city.name}</div>
            <div className='flex-5'>Билборди {city.billboards.length}</div>
            <div className='flex flex-1 gap-x-2.5 justify-end'>
              <ChevronRightIcon className='size-4' />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
