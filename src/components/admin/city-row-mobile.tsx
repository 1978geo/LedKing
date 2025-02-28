import { ChevronRightIcon, MapPinIcon } from 'lucide-react'
import { CityWithBillboards } from '@/types/City'
import { Button } from '@/components/ui/button'

interface CityRowProps {
  city: CityWithBillboards
}

export function CityRow({ city }: CityRowProps) {
  return (
    <div className='flex items-center gap-x-3 justify-between bg-white border-b border-border p-4 text-sm text-slate-700 first-of-type:rounded-t-2xl last-of-type:rounded-b-2xl last-of-type:border-b-0'>
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
  )
}
