import { find } from '@/db/db.repository'
import { CityEntity } from '@/types/City.type'
import { NextResponse } from 'next/server'

export async function GET() {
  const cities = await find<CityEntity>('cities')
  return NextResponse.json(cities, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
