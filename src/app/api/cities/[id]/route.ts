import { findById } from '@/db/db.repository'
import { CityEntity } from '@/types/City.type'
import { NextResponse } from 'next/server'
import { NextApiRequest } from 'next'

export async function GET(_: NextApiRequest, context: any) {
  const { id } = await context.params
  const city = await findById<CityEntity>('cities', id as string)
  return NextResponse.json(city, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
