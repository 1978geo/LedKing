'use server'

import { CityEntity } from '@/types/City.type'

export const getCities = async (): Promise<CityEntity[]> => {
  const response = await fetch(`${process.env.BASE_URL ?? ''}/api/cities`, {
    cache: 'force-cache', // Ensure fresh data (optional)
  })
  if (!response.ok) throw new Error('Failed to fetch cities')
  return response.json()
}
