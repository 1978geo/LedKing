import { findById } from '@/db/db.repository'
import { CityEntity } from '@/types/City.type'
import { NextRequest, NextResponse } from 'next/server'

type Context = {
  params: Promise<{ id: string }>
}

export async function GET(_: NextRequest, context: Context) {
  const { id } = await context.params
  const city = await findById<CityEntity>('cities', id)
  return NextResponse.json(city, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
