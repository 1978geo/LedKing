import { find } from '@/db/db.repository'
import { Billboard } from '@/types/Billboard.type'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const cityId = request?.nextUrl?.searchParams.get('cityId')
  const billboards = await find<Billboard>('billboards')

  if (cityId) {
    const filteredBillboards = billboards.filter(
      billboard => billboard.city.cityId === cityId,
    )

    return NextResponse.json(filteredBillboards, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  return NextResponse.json(billboards, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
