import { ChevronRightIcon, MapPinIcon } from 'lucide-react'
import { CityWithBillboards } from '@/types/City'
import Link from 'next/link'

interface CityRowProps {
  city: CityWithBillboards
}

export function CityRow({ city }: CityRowProps) {
  return (
    <Link
      href={`/admin/cities/${city.id}`}
      className='flex items-center gap-x-4 justify-between bg-white border-b border-border px-4 py-2.5 text-sm first-of-type:rounded-t-2xl last-of-type:rounded-b-2xl last-of-type:border-b-0 active:bg-white/60'
    >
      <button className='size-8 bg-blue-600 flex items-center justify-center border-none rounded-md'>
        <MapPinIcon className='size-4 text-slate-300' />
      </button>
      <div className='flex-1 font-normal text-black'>{city.name}</div>
      <div className='flex-1 text-muted-foreground'>
        Билборди {city.billboards.length}
      </div>
      <div className='flex gap-x-2.5 justify-end'>
        <ChevronRightIcon className='size-4 text-muted-foreground' />
      </div>
    </Link>
  )
}
